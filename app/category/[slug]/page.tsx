import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Filter, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Capitalize the first letter of each word in the slug
  const categoryName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">{categoryName} Stays</h1>
        </div>

        <div className="flex justify-between items-center mb-6">
          <Tabs defaultValue="recommended">
            <TabsList>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="price">Price</TabsTrigger>
              <TabsTrigger value="rating">Rating</TabsTrigger>
            </TabsList>
          </Tabs>

          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Link href={`/listing/${i + 50}`} key={i} className="block">
              <div className="group relative">
                <div className="aspect-square overflow-hidden rounded-xl bg-gray-200 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Property"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="mt-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">
                      {categoryName} Retreat {i + 1}
                    </h3>
                    <div className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
                      </svg>
                      <span>{(4.6 + (i % 4) / 10).toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {i % 4 === 0
                      ? "Aspen, Colorado"
                      : i % 4 === 1
                        ? "Lake Tahoe, California"
                        : i % 4 === 2
                          ? "Breckenridge, Colorado"
                          : "Jackson Hole, Wyoming"}
                  </div>
                  <p className="text-muted-foreground">4 nights · Dec 10-14</p>
                  <p className="mt-1">
                    <span className="font-semibold">${110 + i * 12}</span> night
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

