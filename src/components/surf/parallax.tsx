"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Прогресс положения элемента относительно центра вьюпорта, примерно от -1 до 1.
 * Значение пишется в CSS-переменную --parallax на самом элементе, чтобы не
 * вызывать ре-рендер на каждый кадр скролла.
 */
function useParallaxVar(speed: number) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress =
        (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
      el.style.setProperty(
        "--parallax",
        `${(-progress * speed).toFixed(2)}px`
      );
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}

type ParallaxLayerProps = {
  /** Смещение в px при полном проходе вьюпорта. Положительное — слой отстаёт. */
  speed: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/** Обёртка, сдвигающая произвольный контент при скролле. */
export function ParallaxLayer({
  speed,
  className,
  style,
  children,
}: ParallaxLayerProps) {
  const ref = useParallaxVar(speed);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: "translate3d(0, var(--parallax, 0px), 0)",
      }}
    >
      {children}
    </div>
  );
}

type ParallaxImageProps = {
  src: string;
  alt: string;
  /** Скорость параллакса внутри рамки, px. */
  speed?: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
};

/**
 * Картинка с параллаксом внутри обрезанной рамки: слой изображения на 14%
 * выше контейнера, поэтому сдвиг не обнажает края.
 */
export function ParallaxImage({
  src,
  alt,
  speed = 30,
  sizes,
  priority = false,
  className,
  imgClassName,
}: ParallaxImageProps) {
  const ref = useParallaxVar(speed);
  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <div
        className="absolute inset-x-0 -top-[10%] h-[120%]"
        style={{
          transform: "translate3d(0, var(--parallax, 0px), 0)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      </div>
    </div>
  );
}
