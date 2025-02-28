"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[18rem] rounded-md flex flex-col antialiased bg-gary items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    image:
       "/p1.png",
  },
  {
    image:
      "/p2.png",
  },
  {
    image:
      "/p3.png",
  },
  {
    image:
      "/p4.png",
  },
  {
    image:
      "/p5.png",
  },
];
