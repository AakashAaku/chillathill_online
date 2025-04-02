"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home, Mountain, Palmtree, Snowflake, Tent, UmbrellaIcon, Waves } from "lucide-react"
import { useState, useRef } from "react"
import Link from "next/link"

const categories = [
  { name: "Beachfront", icon: Waves },
  { name: "Cabins", icon: Home },
  { name: "Camping", icon: Tent },
  { name: "Tropical", icon: Palmtree },
  { name: "Mountains", icon: Mountain },
  { name: "Skiing", icon: Snowflake },
  { name: "Pools", icon: UmbrellaIcon },
  { name: "Islands", icon: Palmtree },
  { name: "Lake", icon: Waves },
  { name: "Countryside", icon: Mountain },
  { name: "Mansions", icon: Home },
  { name: "Design", icon: Home },
]

// Update the CategoryFilter component to make categories clickable
export function CategoryFilter() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftScroll, setShowLeftScroll] = useState(false)
  const [showRightScroll, setShowRightScroll] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = 200

      if (direction === "left") {
        current.scrollLeft -= scrollAmount
      } else {
        current.scrollLeft += scrollAmount
      }

      // Check if we can scroll more
      setTimeout(() => {
        setShowLeftScroll(current.scrollLeft > 0)
        setShowRightScroll(current.scrollLeft < current.scrollWidth - current.clientWidth - 10)
      }, 100)
    }
  }

  return (
    <div className="relative">
      {showLeftScroll && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Scroll left</span>
        </Button>
      )}

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-8 py-4 px-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {categories.map((category, i) => (
          <Link
            href={`/category/${category.name.toLowerCase()}`}
            key={i}
            className="flex flex-col items-center gap-2 min-w-[80px]"
          >
            <Button variant="outline" size="icon" className="rounded-full h-16 w-16">
              <category.icon className="h-6 w-6" />
              <span className="sr-only">{category.name}</span>
            </Button>
            <span className="text-xs font-medium">{category.name}</span>
          </Link>
        ))}
      </div>

      {showRightScroll && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Scroll right</span>
        </Button>
      )}
    </div>
  )
}

