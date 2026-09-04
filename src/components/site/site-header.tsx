"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const pageLinks = [
  { title: "Services", href: "/services" },
  { title: "About", href: "/about" },
  { title: "View Our Work", href: "/case-studies" },
  { title: "Pricing", href: "/pricing" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateScroll = () => {
      const nextScrolled = window.scrollY > 12;
      if (nextScrolled === scrolledRef.current) return;
      scrolledRef.current = nextScrolled;
      setScrolled(nextScrolled);
    };
    const onScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        updateScroll();
      });
    };
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <header className={cn("site-header", scrolled && "site-header--scrolled")}>
        <div className="site-header__inner">
          <Link className="wordmark" href="/" aria-label="A27 home">
            A27<span aria-hidden="true">.</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:block ml-8">
            <NavigationMenu>
              <NavigationMenuList>
                {pageLinks.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    <NavigationMenuLink asChild>
                      <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={cn(
                        "group inline-flex w-max items-center justify-center rounded-[var(--radius-md)] px-4 py-2 text-[var(--text-sm)] font-semibold text-[var(--color-ink-2)] outline-none transition-colors hover:bg-[var(--color-paper-2)] hover:text-[var(--color-ink)] focus:bg-[var(--color-paper-2)] focus:text-[var(--color-ink)]",
                        pathname === link.href && "bg-[var(--color-paper-2)] text-[var(--color-ink)]"
                      )}>
                        {link.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="site-header__actions ml-auto">
            <Dialog.Trigger asChild>
              <Button className="site-menu-button lg:hidden" size="icon" variant="icon" aria-label="Open navigation menu">
                <Menu aria-hidden="true" size={20} />
              </Button>
            </Dialog.Trigger>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-menu__overlay" />
        <Dialog.Content className="mobile-menu" aria-describedby={undefined}>
          <div className="mobile-menu__header pb-4">
            <Dialog.Title className="wordmark">A27<span aria-hidden="true">.</span></Dialog.Title>
            <Dialog.Close asChild>
              <Button size="icon" variant="icon" aria-label="Close navigation menu">
                <X aria-hidden="true" size={20} />
              </Button>
            </Dialog.Close>
          </div>
          
          <div className="flex-grow overflow-y-auto py-4">
            <div className="grid border-t border-[var(--color-rule)]">
              {pageLinks.map((link) => (
                <Dialog.Close asChild key={link.title}>
                  <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} className="flex min-h-14 items-center border-b border-[var(--color-rule)] font-[family-name:var(--font-display)] text-[var(--text-lg)] font-semibold text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]">
                    {link.title}
                  </Link>
                </Dialog.Close>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
