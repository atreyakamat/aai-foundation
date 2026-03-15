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
    const letterPositions = useRef<{ x: number; y: number }[]>([]);

    const updateLetterPositions = () => {
      letterPositions.current = lettersRef.current.map((letter) => {
        if (!letter) return { x: 0, y: 0 };
        const rect = letter.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      });
    };

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      updateLetterPositions();

      const handleMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        letterPositions.current.forEach((pos, i) => {
          const letter = lettersRef.current[i];
          if (!letter) return;

          const distance = Math.sqrt(
            Math.pow(mouseX - pos.x, 2) + Math.pow(mouseY - pos.y, 2)
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
              if (style.from === 'var(--color-navy)' && style.to === 'var(--color-blue)') {
                letter.style.color = v > 0.5 ? 'var(--color-blue)' : 'var(--color-navy)';
              }
            } else {
              letter.style.setProperty(`--proximity-${key}`, `${value}${unit}`);
              (letter.style as any)[key] = `${value}${unit}`;
            }
          });
        });
      };

      const handleResize = () => updateLetterPositions();
      const handleScroll = () => updateLetterPositions();

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
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
