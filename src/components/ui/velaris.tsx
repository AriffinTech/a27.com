"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const vertexShaderGLSL = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShaderGLSL = `
precision mediump float;
varying vec2 vUv;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_colors[4];
uniform vec3 u_bg;

void main() {
  vec2 uv = vUv;
  uv.x *= u_resolution.x / max(u_resolution.y, 1.0);
  float t = u_time * 0.16;
  float waveA = sin(uv.x * 3.2 + t) * 0.5 + 0.5;
  float waveB = sin(uv.y * 4.4 - t * 0.8 + waveA) * 0.5 + 0.5;
  float glow = smoothstep(1.15, 0.0, length(uv - vec2(0.8, 0.42))) * 0.34;

  vec3 color = mix(u_bg, u_colors[0], waveA * 0.5);
  color = mix(color, u_colors[1], waveB * 0.42);
  color = mix(color, u_colors[2], glow);
  color = mix(color, u_colors[3], smoothstep(0.7, 1.45, length(uv - vec2(0.65, 0.5))) * 0.45);
  gl_FragColor = vec4(color, 1.0);
}
`;

const DEFAULT_COLORS = ["#86efac", "#4ade80", "#059669", "#000000"];
const FRAME_INTERVAL = 1000 / 30;

function hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  return [
    parseInt(value.slice(0, 2), 16) / 255,
    parseInt(value.slice(2, 4), 16) / 255,
    parseInt(value.slice(4, 6), 16) / 255,
  ];
}

export interface VelarisProps {
  bg?: string;
  colors?: string[];
  speed?: number;
  height?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Velaris({
  bg = "#000000",
  colors = DEFAULT_COLORS,
  speed = 2,
  height = "100vh",
  className,
  children,
}: VelarisProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) throw new Error("Unable to create WebGL shader.");
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderGLSL);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderGLSL);
    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      resolution: gl.getUniformLocation(program, "u_resolution"),
      time: gl.getUniformLocation(program, "u_time"),
      colors: gl.getUniformLocation(program, "u_colors"),
      background: gl.getUniformLocation(program, "u_bg"),
    };
    const background = hexToRgb(bg);
    const palette = new Float32Array(colors.slice(0, 4).flatMap(hexToRgb));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frameId: number | null = null;
    let running = false;
    let visible = true;
    let lastPaint = -Infinity;

    const draw = (time: number) => {
      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
      gl.uniform1f(uniforms.time, time * 0.001 * speed);
      gl.uniform3f(uniforms.background, ...background);
      gl.uniform3fv(uniforms.colors, palette);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const shouldAnimate = () =>
      visible && document.visibilityState === "visible" && !reducedMotion.matches;

    const stop = () => {
      running = false;
      if (frameId !== null) cancelAnimationFrame(frameId);
      frameId = null;
    };

    const render = (time: number) => {
      frameId = null;
      if (!running || !shouldAnimate()) {
        stop();
        return;
      }
      if (time - lastPaint >= FRAME_INTERVAL) {
        draw(time);
        lastPaint = time;
      }
      frameId = requestAnimationFrame(render);
    };

    const start = () => {
      if (running || !shouldAnimate()) return;
      running = true;
      lastPaint = -Infinity;
      frameId = requestAnimationFrame(render);
    };

    const update = () => {
      if (shouldAnimate()) start();
      else {
        stop();
        draw(0);
      }
    };

    const resize = () => {
      const dpr = window.innerWidth <= 768 ? 1 : Math.min(window.devicePixelRatio, 1.25);
      const width = Math.max(1, Math.floor(container.clientWidth * dpr));
      const height = Math.max(1, Math.floor(container.clientHeight * dpr));
      if (canvas.width === width && canvas.height === height) return;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      if (!running) draw(0);
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });

    resizeObserver.observe(container);
    intersectionObserver.observe(container);
    reducedMotion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    resize();
    update();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      reducedMotion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, [bg, colors, speed]);

  return (
    <div ref={containerRef} style={{ height }} className={cn("relative w-full overflow-hidden", className)}>
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
