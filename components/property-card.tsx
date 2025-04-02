import { Heart } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

export function PropertyCard() {
  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden rounded-xl bg-gray-200 relative">
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Property"
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-white hover:text-rose-500 z-10">
          <Heart className="h-6 w-6" />
          <span className="sr-only">Favorite</span>
        </Button>
      </div>
      <div className="block mt-2">
        <div className="flex justify-between">
          <h3 className="font-medium">Mountain Retreat</h3>
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor">
              <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
            </svg>
            <span>4.92</span>
          </div>
        </div>
        <p className="text-muted-foreground">Hosted by John</p>
        <p className="text-muted-foreground">5 nights · Nov 12-17</p>
        <p className="mt-1">
          <span className="font-semibold">$120</span> night
        </p>
      </div>
    </div>
  )
}

