"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[18rem] rounded-md flex flex-col antialiased bg-gary items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
  image: 'https://cdn.prod.website-files.com/6443d6d96a788f6942166567/64e51cecd781cb33a14cc2a6_Thumbnail-p-800.png'
  },
  {
image: 'https://cdn.prod.website-files.com/6443d6d96a788f6942166567/665df90dd6ff4b22f7eb30e0_Thumbnail.png'
  },
  {
image: 'https://cdn.prod.website-files.com/6443d6d96a788f6942166567/6491be6afc6d39159e1159e0_Thumbnail.jpg'
  },
  {
image: 'https://cdn.prod.website-files.com/6443d6d96a788f6942166567/66707454b6076bcc0554b985_Thumbnail-p-800.png'
  },
  {
image: 'https://cdn.prod.website-files.com/6443d6d96a788f6942166567/64e51cecd781cb33a14cc2a6_Thumbnail-p-800.png'
  },
];
