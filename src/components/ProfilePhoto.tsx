"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfilePhoto() {
  const [error, setError] = useState(false);

  return (
    <div
      className="w-full overflow-hidden"
      style={{ aspectRatio: "3/4", backgroundColor: "#e0ddd8" }}
    >
      {!error ? (
        <Image
          src="/profile.webp"
          alt="Nasaruddin, ST"
          width={416}
          height={554}
          className="w-full h-full object-cover object-top"
          onError={() => setError(true)}
          unoptimized
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
          {/* Silhouette SVG */}
          <svg
            width="60"
            height="80"
            viewBox="0 0 60 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="22" r="16" fill="#b0aca5" />
            <path
              d="M0 72 C0 52 60 52 60 72"
              fill="#b0aca5"
            />
          </svg>
          <span
            className="text-xs text-gray-400 uppercase tracking-widest"
            style={{ fontFamily: "var(--font-typewriter)" }}
          >
            [ photo ]
          </span>
        </div>
      )}
    </div>
  );
}
