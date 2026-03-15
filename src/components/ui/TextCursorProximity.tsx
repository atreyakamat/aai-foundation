"use client";

import React, { forwardRef, useMemo, useRef, CSSProperties } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref";
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

const Letter = ({
  letter,
  mousePositionRef,
  radius,
  styles,
  falloff,
}: {
  letter: string;
  mousePositionRef: React.MutableRefObject<{ x: number; y: number }>;
  radius: number;
  styles: Partial<{ [K in keyof CSSProperties]: StyleTransition }>;
  falloff: "linear" | "exponential" | "gaussian";
}) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const proximity = useMotionValue(0);

  useAnimationFrame(() => {
    if (!letterRef.current) return;

    const rect = letterRef.current.getBoundingClientRect();
    const letterX = rect.left + rect.width / 2;
    const letterY = rect.top + rect.height / 2;

    const containerRect = letterRef.current.closest('section')?.getBoundingClientRect();
    if (!containerRect) return;

    const mouseX = mousePositionRef.current.x + containerRect.left;
    const mouseY = mousePositionRef.current.y + containerRect.top;

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
    proximity.set(v);
  });

  const animatedStyles = Object.keys(styles).reduce((acc, key) => {
    const style = styles[key as keyof CSSProperties]!;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const transformedValue = useTransform(proximity, [0, 1], [style.from, style.to]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (acc as any)[key] = transformedValue;
    return acc;
  }, {} as Record<string, unknown>);

  return (
    <motion.span
      ref={letterRef}
      style={animatedStyles as CSSProperties}
      className="inline-block whitespace-pre"
    >
      {letter}
    </motion.span>
  );
};

export const TextCursorProximity = forwardRef<HTMLElement, TextCursorProximityProps>(
  ({ children, styles, containerRef, radius = 100, falloff = "linear", className, as: Component = "span" }, ref) => {
    const mousePositionRef = useMousePositionRef(containerRef);
    const letters = useMemo(() => children.split(""), [children]);

    return (
      <Component ref={ref} className={cn("inline-block", className)}>
        {letters.map((letter, i) => (
          <Letter
            key={i}
            letter={letter}
            mousePositionRef={mousePositionRef}
            radius={radius}
            styles={styles}
            falloff={falloff}
          />
        ))}
      </Component>
    );
  }
);

TextCursorProximity.displayName = "TextCursorProximity";
