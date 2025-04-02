import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function HostPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative h-[600px] w-full">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Host hero image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
            <div className="container mx-auto px-4 pt-32">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Become a Host</h1>
                <p className="text-xl text-white mb-8">
                  Earn extra income and unlock new opportunities by sharing your space.
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why host on ChillAtHill?</h2>
            <p className="text-xl mb-12">
              Hosts are the heart of ChillAtHill. They provide guests with one-of-a-kind stays and experiences that make
              travel more authentic and connected.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500">
                    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-4 9h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Share your space, keep your privacy</h3>
                <p className="text-gray-600">
                  You're in control of your availability, prices, house rules, and how you interact with guests.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500">
                    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-4 9h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Host with confidence</h3>
                <p className="text-gray-600">
                  To help protect your property and your peace of mind, we include $1M in damage protection and
                  liability insurance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500">
                    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-4 9h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">We're there for you</h3>
                <p className="text-gray-600">
                  From 24/7 customer support to host education resources, we're here to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">How hosting works</h2>

              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <div className="rounded-xl overflow-hidden h-64 relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="List your space"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">1. List your space for free</h3>
                    <p className="mb-4">
                      Share any space without sign-up charges, from a shared living room to a second home and everything
                      in-between.
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
                    <h3 className="text-2xl font-bold mb-4">2. Welcome your first guest</h3>
                    <p className="mb-4">
                      Once your listing is live, qualified guests can reach out. You can message them with any questions
                      before their stay.
                    </p>
                    <Button variant="link" className="flex items-center gap-2 p-0">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <div className="rounded-xl overflow-hidden h-64 relative">
                      <Image src="/placeholder.svg?height=300&width=400" alt="Get paid" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">3. Get paid</h3>
                    <p className="mb-4">
                      When guests check in, we'll send your money. You can choose to get paid via direct deposit,
                      PayPal, or other available methods.
                    </p>
                    <Button variant="link" className="flex items-center gap-2 p-0">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">We've got your back</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-rose-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">$1M USD damage protection</h3>
                  <p className="text-gray-600">
                    ChillAtHill reimburses you for damage caused by guests to your home and belongings.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-rose-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">$1M USD liability insurance</h3>
                  <p className="text-gray-600">
                    You're protected in the rare event that a guest gets hurt or their belongings are damaged or stolen.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-rose-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Guest identity verification</h3>
                  <p className="text-gray-600">
                    Our comprehensive verification system checks details such as name, address, government ID, and more.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-rose-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Reservation screening</h3>
                  <p className="text-gray-600">
                    Our technology analyzes hundreds of factors in each reservation and blocks certain bookings that
                    show a high risk for disruptive parties and property damage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-rose-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
              <p className="text-xl mb-8">Join the millions of hosts who have welcomed over 1.5 billion guests.</p>
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-6 text-lg"
              >
                Try hosting
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

