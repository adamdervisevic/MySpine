// src/components/LazyMap.tsx
"use client";
import { useState, useRef, useEffect } from "react";

type Props = {
  src: string;                 // tvoj Google Maps embed URL
  placeholder?: string;        // slika preview-a (npr. /images/map-placeholder.webp)
  title?: string;
  className?: string;
  autoLoadOnView?: boolean;    // ako želiš da se sama učita kad uđe u viewport
};

export default function LazyMap({
  src,
  placeholder = "/images/map-placeholder.webp",
  title = "Lokacija ordinacije",
  className = "w-full h-full border-0",
  autoLoadOnView = false,
}: Props) {
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Opcija: auto-učitaj kad uđe u viewport (IntersectionObserver)
  useEffect(() => {
    if (!autoLoadOnView || show || !containerRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShow(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, [autoLoadOnView, show]);

  return (
    <div ref={containerRef} className="relative w-full h-80 rounded-xl overflow-hidden shadow border border-gray-200">
      {show ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className={className}
        />
      ) : (
        <button
          onClick={() => setShow(true)}
          className="group relative w-full h-full"
          aria-label="Prikaži mapu"
        >
          {/* preview slika */}
          <img
            src={placeholder}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* tamni overlay + dugme */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="px-4 py-2 rounded-lg bg-white text-gray-800 font-semibold shadow group-hover:scale-105 transition">
              Prikaži mapu
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
