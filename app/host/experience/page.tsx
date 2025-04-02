import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HostExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Host experience hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
            <div className="container mx-auto px-4 pt-32">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Host an Experience</h1>
                <p className="text-xl text-white mb-8">
                  Share your passion, expertise, and insider knowledge with travelers from around the world.
                </p>
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-6 text-lg"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why host experiences on ChillAtHill?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500">
                      <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-4 9h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Share your passion</h3>
                  <p className="text-gray-600">
                    Turn what you love to do into a source of income by hosting experiences for travelers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500">
                      <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-4 9h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Meet people from around the world</h3>
                  <p className="text-gray-600">
                    Connect with travelers and share your knowledge and culture with a global community.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500">
                      <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-4 9h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Earn money</h3>
                  <p className="text-gray-600">
                    Set your own price and schedule. You're in control of how and when you host.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Popular experience categories</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Button variant="outline" className="rounded-full">
                  Cooking classes
                </Button>
                <Button variant="outline" className="rounded-full">
                  Outdoor adventures
                </Button>
                <Button variant="outline" className="rounded-full">
                  Art & culture
                </Button>
                <Button variant="outline" className="rounded-full">
                  Tours
                </Button>
                <Button variant="outline" className="rounded-full">
                  Food & drink
                </Button>
                <Button variant="outline" className="rounded-full">
                  Entertainment
                </Button>
                <Button variant="outline" className="rounded-full">
                  Wellness
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="rounded-xl overflow-hidden h-64 relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Create your experience"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">1. Create your experience</h3>
                  <p className="mb-4">
                    Design an experience around your expertise and passion. We'll help you refine your idea and create a
                    compelling listing.
                  </p>
                  <Button variant="link" className="flex items-center gap-2 p-0">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="rounded-xl overflow-hidden h-64 relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Welcome guests"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">2. Welcome your guests</h3>
                  <p className="mb-4">
                    Once your experience is live, guests can book it. Host them with your unique perspective and
                    expertise.
                  </p>
                  <Button variant="link" className="flex items-center gap-2 p-0">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="rounded-xl overflow-hidden h-64 relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Grow your business"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">3. Grow your business</h3>
                  <p className="mb-4">
                    As you get reviews and build your reputation, you can expand your offerings and increase your
                    earnings.
                  </p>
                  <Button variant="link" className="flex items-center gap-2 p-0">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-rose-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to share your passion?</h2>
              <p className="text-xl mb-8">
                Join thousands of hosts who are sharing their expertise and earning income on ChillAtHill.
              </p>
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-6 text-lg"
              >
                Start hosting
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

