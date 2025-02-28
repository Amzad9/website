"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image:
      "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    image:
      "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.  Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image:
      "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.  Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image:
      "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    image:
      "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const TestimonialsSection = ({
  // items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  // items: {
  //   quote: string;
  //   name: string;
  //   title: string;
  // }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div className="container mx-auto bg-black">
      <div
        ref={containerRef}
        className={cn(
          "scroller bg-black relative z-20  max-w-7xl overflow-hidden",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            " flex w-full shrink-0 gap-0 py-4 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="inline-flex items-center px-6 py-4 bg-black border-t-0 border-2 border-primary text-white rounded-[24px] shadow-lg mx-3 w-[350px] h-[300px] flex-col justify-between"
            >
              <div className="flex flex-col items-start">
                <div className="flex text-primary mb-2">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-xl">
                      {star}
                    </span>
                  ))}
                </div>
                <p class="text-sm text-left">{item.quote}</p>
              </div>
              <div className="flex justify-start w-full items-center my-4">
                <div className="flex-shrink-0">
                  <Image
                    className="w-12 h-12 rounded-xl mr-4"
                    src={item.image}
                    alt={item.author}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-left">
                  <p className="text-lg font-medium font-poppins">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
