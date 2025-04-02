import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Filter, MapPin, SearchIcon, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="bg-white rounded-full border shadow-sm p-2 flex items-center mb-4">
              <div className="flex-1 px-4">
                <Input
                  type="text"
                  placeholder="Search destinations"
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  defaultValue="Mountain retreats"
                />
              </div>
              <Separator orientation="vertical" className="h-8 mx-2 hidden md:block" />
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="rounded-full text-sm">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Any week
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="range" />
                </PopoverContent>
              </Popover>
              <Separator orientation="vertical" className="h-8 mx-2 hidden md:block" />
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="rounded-full text-sm">
                    <Users className="mr-2 h-4 w-4" />
                    Guests
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Adults</p>
                        <p className="text-sm text-muted-foreground">Ages 13 or above</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                          -
                        </Button>
                        <span>0</span>
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Children</p>
                        <p className="text-sm text-muted-foreground">Ages 2-12</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                          -
                        </Button>
                        <span>0</span>
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Button size="icon" className="rounded-full bg-rose-500 text-white ml-2">
                <SearchIcon className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="mb-6">
          <Tabs defaultValue="all">
            <TabsList className="bg-transparent border-b w-full justify-start rounded-none h-auto p-0 mb-6">
              <TabsTrigger
                value="all"
                className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white px-4 py-2"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="cabins"
                className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white px-4 py-2"
              >
                Cabins
              </TabsTrigger>
              <TabsTrigger
                value="mountains"
                className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white px-4 py-2"
              >
                Mountains
              </TabsTrigger>
              <TabsTrigger
                value="lakefront"
                className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white px-4 py-2"
              >
                Lakefront
              </TabsTrigger>
              <TabsTrigger
                value="amazing-views"
                className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white px-4 py-2"
              >
                Amazing views
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 12 }).map((_, i) => (
                  <Link href={`/listing/${i + 1}`} key={i} className="block">
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
                          <h3 className="font-medium">Mountain Retreat {i + 1}</h3>
                          <div className="flex items-center gap-1">
                            <svg
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="currentColor"
                            >
                              <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
                            </svg>
                            <span>{(4.5 + (i % 5) / 10).toFixed(1)}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {i % 3 === 0
                            ? "Aspen, Colorado"
                            : i % 3 === 1
                              ? "Lake Tahoe, California"
                              : "Breckenridge, Colorado"}
                        </div>
                        <p className="text-muted-foreground">5 nights · Nov 12-17</p>
                        <p className="mt-1">
                          <span className="font-semibold">${100 + i * 10}</span> night
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cabins" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Link href={`/listing/${i + 20}`} key={i} className="block">
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
                          <h3 className="font-medium">Cozy Cabin {i + 1}</h3>
                          <div className="flex items-center gap-1">
                            <svg
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="currentColor"
                            >
                              <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
                            </svg>
                            <span>{(4.7 + (i % 3) / 10).toFixed(1)}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {i % 2 === 0 ? "Big Bear, California" : "Gatlinburg, Tennessee"}
                        </div>
                        <p className="text-muted-foreground">3 nights · Dec 5-8</p>
                        <p className="mt-1">
                          <span className="font-semibold">${130 + i * 15}</span> night
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {/* Other tab contents would be similar */}
            <TabsContent value="mountains" className="mt-0">
              <div className="text-center py-8">
                <p>Mountain properties content would go here</p>
              </div>
            </TabsContent>

            <TabsContent value="lakefront" className="mt-0">
              <div className="text-center py-8">
                <p>Lakefront properties content would go here</p>
              </div>
            </TabsContent>

            <TabsContent value="amazing-views" className="mt-0">
              <div className="text-center py-8">
                <p>Amazing views properties content would go here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

