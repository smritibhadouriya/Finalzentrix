import { useEffect, useRef } from "react";

export default function ParallaxBackground({ speed = 0.3 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.parentElement.getBoundingClientRect();
      const offset = -rect.top * speed;

      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* Circle 1 */}
      <div className="absolute top-10 left-1/2 w-40 h-40 rounded-full bg-pink-400 blur-3xl opacity-80 animate-pulse" />

      {/* Circle 2 */}
      <div className="absolute top-40 left-1/2 w-56 h-56 rounded-full bg-blue-400 blur-3xl opacity-80 animate-pulse" />

      {/* Circle 3 */}
      <div className="absolute top-50 left-1/2 w-72 h-72 rounded-full bg-pink-300 blur-3xl opacity-60 animate-pulse" />
    </div>
  );
}
