"use client";

import React, { forwardRef, useMemo, useRef, CSSProperties, useEffect } from "react";
import { cn } from "@/lib/utils";

interface StyleTransition {
  from: string | number;
  to: string | number;
}

interface TextCursorProximityProps {
  children: string;
  styles: Partial<{ [K in keyof CSSProperties]: StyleTransition }>;
  containerRef: React.RefObject<HTMLElement | null>;
  radius?: number;
  falloff?: "linear" | "exponential" | "gaussian";
  className?: string;
  as?: React.ElementType;
}

export const TextCursorProximity = forwardRef<HTMLElement, TextCursorProximityProps>(
  ({ children, styles, containerRef, radius = 100, falloff = "linear", className, as: Component = "span" }, ref) => {
    const letters = useMemo(() => children.split(""), [children]);
    const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const handleMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        lettersRef.current.forEach((letter) => {
          if (!letter) return;

          const rect = letter.getBoundingClientRect();
          const letterX = rect.left + rect.width / 2;
          const letterY = rect.top + rect.height / 2;

          const distance = Math.sqrt(
            Math.pow(mouseX - letterX, 2) + Math.pow(mouseY - letterY, 2)
          );

          let v = 0;
          if (distance < radius) {
            if (falloff === "linear") {
              v = 1 - distance / radius;
            } else if (falloff === "exponential") {
              v = Math.pow(1 - distance / radius, 2);
            } else if (falloff === "gaussian") {
              v = Math.exp(-Math.pow(distance / (radius / 2), 2));
            }
          }

          // Apply styles via CSS variables for maximum performance
          Object.keys(styles).forEach((key) => {
            const style = styles[key as keyof CSSProperties]!;
            const from = typeof style.from === 'number' ? style.from : parseFloat(style.from as string);
            const to = typeof style.to === 'number' ? style.to : parseFloat(style.to as string);
            const unit = typeof style.from === 'string' ? (style.from.match(/[a-z%]+$/)?.[0] || '') : '';
            
            const value = from + (to - from) * v;
            
            if (key === 'color') {
              // Special handling for colors if needed, but for navy to blue:
              // For simplicity, let's assume numeric values or handled separately.
              // If it's the specific navy/blue transition:
              if (style.from === 'var(--color-navy)' && style.to === 'var(--color-blue)') {
                letter.style.color = v > 0.5 ? 'var(--color-blue)' : 'var(--color-navy)';
              }
            } else {
              letter.style.setProperty(`--proximity-${key}`, `${value}${unit}`);
              // Fallback for non-variable supported properties if any
              (letter.style as any)[key] = `${value}${unit}`;
            }
          });
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [containerRef, radius, falloff, styles]);

    return (
      <Component ref={ref} className={cn("inline-block", className)}>
        {letters.map((letter, i) => (
          <span
            key={i}
            ref={(el) => {
              lettersRef.current[i] = el;
            }}
            className="inline-block whitespace-pre transition-all duration-200 ease-out"
          >
            {letter}
          </span>
        ))}
      </Component>
    );
  }
);

TextCursorProximity.displayName = "TextCursorProximity";
