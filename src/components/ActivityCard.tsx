"use client";

import { useState } from "react";
import Image from "next/image";

interface ActivityItem {
  id: number;
  title: string;
  year: string;
  description: string;
}

interface ActivityCardProps {
  item: ActivityItem;
}

// Subtle muted palette — typewriter/aged paper feel
const placeholderColors = [
  "#dddbd5",
  "#d5d8dd",
  "#ddd5d5",
  "#d5ddd8",
  "#d8d5dd",
  "#ddddd5",
  "#d5dddd",
  "#ddd5dd",
];

export default function ActivityCard({ item }: ActivityCardProps) {
  const [imgError, setImgError] = useState(false);
  const bgColor = placeholderColors[(item.id - 1) % placeholderColors.length];

  const imageSrc = `/activities/activity-${String(item.id).padStart(2, "0")}.jpg`;

  return (
    <div className="bg-white group cursor-default">
      {/* Image area */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "4/3", backgroundColor: bgColor }}
      >
        {!imgError ? (
          <Image
            src={imageSrc}
            alt={item.title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          /* Placeholder when no image exists */
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: bgColor }}
          >
            <span
              className="text-xs text-gray-400 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-typewriter)" }}
            >
              [ PHOTO ]
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-90 transition-opacity duration-200 flex items-center justify-center p-4">
          <p
            className="text-xs text-center leading-relaxed text-black"
            style={{ fontFamily: "var(--font-typewriter)" }}
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* Caption */}
      <div
        className="p-2"
        style={{ fontFamily: "var(--font-typewriter)" }}
      >
        <p className="text-xs uppercase tracking-wide leading-tight font-bold">
          {item.title}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">{item.year}</p>
      </div>
    </div>
  );
}
