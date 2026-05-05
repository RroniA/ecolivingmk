"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "dark" | "outline" | "accent";
}

export default function Button({ children, href, onClick, className = "", variant = "dark" }: ButtonProps) {
  
  // ── BASE STYLES: Shape, Shadow, Blur, and THE HOVER SHRINK EFFECT ──
  const baseStyles = clsx(
    "relative inline-flex items-center justify-center font-body text-sm font-semibold rounded-full",
    "px-8 py-3.5",
    "backdrop-blur-[20px] transition-all duration-300 ease-in-out",
    "overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]", 
    "hover:scale-95" 
  );

  // ── VARIANT STYLES: Using Native Tailwind v4 @theme Classes ──
  const variantStyles = {
    // Dark Button
    dark: clsx(
      "bg-bg-dark text-text-inverse",
      "hover:bg-border-dark hover:text-text-inverse" 
    ),
    
    // Outline Button
    outline: clsx(
      "bg-bg border border-[#b0afa8] text-text", 
      "hover:bg-border-dark hover:text-text-inverse hover:border-border-dark" 
    ),
    
    // Accent Button
    accent: clsx(
      "bg-accent text-text border border-accent",
      "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)]", 
      "hover:bg-border-dark hover:text-text-inverse hover:border-border-dark" 
    ),
  };

  const finalClassName = clsx(baseStyles, variantStyles[variant], className);

  // If it's a link, use Next.js <Link>
  if (href) {
    return (
      <Link href={href} className={finalClassName}>
        {children}
      </Link>
    );
  }

  // Otherwise, render a normal button
  return (
    <button onClick={onClick} className={finalClassName}>
      {children}
    </button>
  );
}