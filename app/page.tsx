import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Search, Users } from "lucide-react"
import Image from "next/image"
import { PropertyCard } from "@/components/property-card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { CategoryFilter } from "@/components/category-filter"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Update the hero section to be more responsive */}
        <section className="relative h-[400px] md:h-[500px] w-full">
          <Image src="/placeholder.svg?height=500&width=1200" alt="Hero image" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
            <div className="container mx-auto px-4 pt-20 md:pt-32">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Find your perfect getaway with ChillAtHill
              </h1>
              <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl hidden md:block">
                <Tabs defaultValue="stays">
                  <TabsList className="mb-4">
                    <TabsTrigger value="stays">Stays</TabsTrigger>
                    <TabsTrigger value="experiences">Experiences</TabsTrigger>
                    <TabsTrigger value="online-experiences">Online Experiences</TabsTrigger>
                  </TabsList>
                  <TabsContent value="stays">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="space-y-1 border-r p-2">
                        <label className="text-sm font-medium">Where</label>
                        <input
                          type="text"
                          placeholder="Search destinations"
                          className="w-full border-0 focus:ring-0 outline-none text-sm"
                        />
                      </div>
                      <div className="space-y-1 border-r p-2">
                        <label className="text-sm font-medium">Check in</label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="ghost" className="p-0 h-auto font-normal justify-start text-sm">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              Add dates
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-1 border-r p-2">
                        <label className="text-sm font-medium">Check out</label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="ghost" className="p-0 h-auto font-normal justify-start text-sm">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              Add dates
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="flex items-center space-x-2 p-2">
                        <div className="flex-1 space-y-1">
                          <label className="text-sm font-medium">Who</label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="ghost" className="p-0 h-auto font-normal justify-start text-sm">
                                <Users className="mr-2 h-4 w-4" />
                                Add guests
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
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium">Infants</p>
                                    <p className="text-sm text-muted-foreground">Under 2</p>
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
                        </div>
                        <Button className="rounded-full bg-rose-500 hover:bg-rose-600" asChild>
                          <Link href="/search">
                            <Search className="h-4 w-4" />
                            <span className="sr-only md:not-sr-only md:ml-2">Search</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="experiences">
                    <div className="p-4 text-center">
                      <p>Discover unique experiences hosted by locals</p>
                      <Button className="mt-4 rounded-full bg-rose-500 hover:bg-rose-600" asChild>
                        <Link href="/experiences">Browse experiences</Link>
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="online-experiences">
                    <div className="p-4 text-center">
                      <p>Live interactive activities led by hosts</p>
                      <Button className="mt-4 rounded-full bg-rose-500 hover:bg-rose-600" asChild>
                        <Link href="/online-experiences">Browse online experiences</Link>
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Update the category filter section to make it more responsive */}
        <section className="container mx-auto px-4 py-8">
          <CategoryFilter />
        </section>

        {/* Update the property listings section to be more responsive */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Popular destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Link href={`/listing/${i + 1}`} key={i}>
                <PropertyCard />
              </Link>
            ))}
          </div>
        </section>

        {/* Update the host promotion section to be more responsive */}
        <section className="container mx-auto px-4 py-8 md:py-12 bg-gray-50 my-8 md:my-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Become a ChillAtHill host</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8">
              Earn extra income and unlock new opportunities by sharing your space.
            </p>
            <Button
              className="rounded-full bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="/host">Learn more</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

