"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

const REVEAL_THRESHOLD = 0.12;
const REVEAL_ROOT_MARGIN = "0px 0px -8% 0px";

type Props = {
  children: ReactNode;
  /** Stagger in milliseconds, applied as a transition delay. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Fades and lifts content into view once, the first time it enters the viewport.
 * Styling lives in globals.css (.reveal) so reduced-motion users get it disabled.
 */
export default function Reveal({ children, delay = 0, as, className = "" }: Props) {
  const Tag = as ?? "div";
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Very old browsers without IntersectionObserver: show the content outright
    // rather than leaving it stranded at opacity 0.
    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: REVEAL_THRESHOLD, rootMargin: REVEAL_ROOT_MARGIN },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={elementRef}
      className={`reveal ${className}`}
      data-visible={isVisible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
