import React from "react";
import clsx from "clsx";

interface SectionTagProps {
  text: string;
  className?: string;
}

export default function SectionTag({ text, className = "" }: SectionTagProps) {
  return (
    <div className={clsx("flex items-center gap-3", className)}>
      {/* The 8x8px Lime Green Dot */}
      <div className="h-2 w-2 shrink-0 rounded-full bg-accent"></div>
      
      {/* The Eyebrow Text (Exact pixel translations from your CSS) */}
      <span className="font-body text-[8px] font-medium leading-[10px] tracking-[0.5px] text-text-muted uppercase">
        {text}
      </span>
    </div>
  );
}