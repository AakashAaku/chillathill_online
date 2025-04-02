import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Heart, Share, Star, Users } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function ListingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Mountain Retreat with Amazing Views</h1>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 font-medium">4.92</span>
            <span className="mx-1">·</span>
            <span className="underline">128 reviews</span>
          </div>
          <span>·</span>
          <span>Superhost</span>
          <span>·</span>
          <span className="underline">Aspen, Colorado, United States</span>

          <div className="ml-auto flex gap-4">
            <Button variant="ghost" className="flex items-center gap-2">
              <Share className="h-4 w-4" />
              <span>Share</span>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span>Save</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[400px] mb-8 rounded-xl overflow-hidden">
          <div className="col-span-1 row-span-2 relative">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Property main image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image src="/placeholder.svg?height=200&width=200" alt="Property image 2" fill className="object-cover" />
          </div>
          <div className="relative">
            <Image src="/placeholder.svg?height=200&width=200" alt="Property image 3" fill className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold">Entire cabin hosted by John</h2>
                <p className="text-muted-foreground">6 guests · 3 bedrooms · 4 beds · 2 baths</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                <Image src="/placeholder.svg?height=50&width=50" alt="Host" fill className="object-cover" />
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 p-2">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm1 6h-2v8h-4v2h4v4h2v-4h4v-2h-4v-8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Self check-in</h3>
                  <p className="text-muted-foreground">Check yourself in with the keypad.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 p-2">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm7 7h-6v2h6v2h-6v2h6v2h-6v6h-2v-6H9v-2h6v-2H9v-2h6V9H9V7h14v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Great location</h3>
                  <p className="text-muted-foreground">95% of recent guests gave the location a 5-star rating.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 p-2">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm4.9 14.1l-4.5-4.5L10 18l1.4 1.4 4.5-4.5 4.5 4.5 1.5-1.4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Free cancellation before Nov 10</h3>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <p className="mb-4">
                Nestled in the heart of the mountains, this beautiful cabin offers breathtaking views and a peaceful
                retreat from the hustle and bustle of everyday life. With three spacious bedrooms, a fully equipped
                kitchen, and a cozy living area with a fireplace, it's the perfect getaway for families or groups of
                friends.
              </p>
              <p className="mb-4">
                The property is surrounded by nature, with hiking trails starting right at your doorstep. In winter,
                you're just a 10-minute drive from the ski slopes, and in summer, you can enjoy mountain biking,
                fishing, and swimming in the nearby lake.
              </p>
              <Button variant="link" className="p-0">
                Show more
              </Button>
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Where you'll sleep</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border rounded-xl p-4">
                  <h3 className="font-bold mb-2">Bedroom 1</h3>
                  <p>1 king bed</p>
                </div>
                <div className="border rounded-xl p-4">
                  <h3 className="font-bold mb-2">Bedroom 2</h3>
                  <p>1 queen bed</p>
                </div>
                <div className="border rounded-xl p-4">
                  <h3 className="font-bold mb-2">Bedroom 3</h3>
                  <p>2 single beds</p>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">What this place offers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-4 9h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
                  </svg>
                  <span>Mountain view</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-4 9h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
                  </svg>
                  <span>Kitchen</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-4 9h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
                  </svg>
                  <span>Wifi</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-4 9h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
                  </svg>
                  <span>Free parking on premises</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-4 9h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
                  </svg>
                  <span>Hot tub</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-4 9h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
                  </svg>
                  <span>Fireplace</span>
                </div>
              </div>
              <Button variant="outline" className="mt-4">
                Show all 20 amenities
              </Button>
            </div>
          </div>

          <div>
            <Card className="p-6 sticky top-24">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xl font-bold">$120</span>
                  <span> night</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1">4.92</span>
                  <span className="mx-1">·</span>
                  <span className="underline">128 reviews</span>
                </div>
              </div>

              <div className="border rounded-xl overflow-hidden mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-b">
                    <div className="text-xs font-bold">CHECK-IN</div>
                    <div>11/12/2023</div>
                  </div>
                  <div className="p-3 border-b">
                    <div className="text-xs font-bold">CHECKOUT</div>
                    <div>11/17/2023</div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-xs font-bold">GUESTS</div>
                  <div className="flex justify-between items-center">
                    <div>2 guests</div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Users className="h-4 w-4" />
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
                              <span>2</span>
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
                  </div>
                </div>
              </div>

              <Button className="w-full mb-4">Reserve</Button>
              <p className="text-center text-sm mb-4">You won't be charged yet</p>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="underline">$120 x 5 nights</span>
                  <span>$600</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>$85</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Service fee</span>
                  <span>$95</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total before taxes</span>
                  <span>$780</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

