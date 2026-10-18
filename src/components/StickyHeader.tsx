"use client";

import { useEffect, useRef } from "react";

export default function StickyHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      if (headerRef.current) {
        const h = headerRef.current.getBoundingClientRect().height;
        document.documentElement.style.setProperty(
          "--header-height",
          `${h}px`
        );
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white px-8 pt-8 pb-0"
      style={{ fontFamily: "var(--font-typewriter)" }}
    >
      {children}
    </header>
  );
}
