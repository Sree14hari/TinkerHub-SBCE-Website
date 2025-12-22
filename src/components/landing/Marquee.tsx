"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const MarqueeItem = ({ text, useLogo }: { text: string; useLogo?: boolean }) => (
  <div className="flex items-center mx-4">
    <span className="text-xl font-bold tracking-wider leading-none">
      {text.toUpperCase()}
    </span>
    <Star className="w-5 h-5 ml-2 fill-current" />
  </div>
);

export default function Marquee({
  content,
  className,
  useLogoForText,
}: {
  content: string[];
  className?: string;
  useLogoForText?: string;
}) {
  const fullContent = [...content, ...content, ...content, ...content];

  return (
    <div className={cn("relative overflow-hidden py-4 my-8 w-[120vw] -mx-[60vw] left-1/2", className)}>
      <div className="flex animate-marquee whitespace-nowrap">
        {fullContent.map((text, index) => (
          <MarqueeItem
            key={index}
            text={text}
            useLogo={useLogoForText === text}
          />
        ))}
      </div>
    </div>
  );
}
