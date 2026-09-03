import { processSteps } from "@/config/services";

export function ProcessSteps() {
  return (
    <ol className="process-steps">
      {processSteps.map((step, index) => (
        <li key={step.title}>
          <span className="process-steps__index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div className="process-steps__content">
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
