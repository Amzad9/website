"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[18rem] rounded-md flex flex-col antialiased bg-gary items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
    </div>
  );
}

const testimonials = [
  {
    image:
       "/1.jpeg",
  },
  {
    image:
      "/2.jpeg",
  },
  {
    image:
      "/3.jpeg",
  },
  {
    image:
      "/4.jpeg",
  },
  {
    image:
      "/5.jpeg",
  },
{
    image:
      "/6.jpeg",
  },
];
