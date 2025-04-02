import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ArrowRight, ChevronRight, Search } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-rose-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-6">How can we help?</h1>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for help topics..."
                  className="pl-10 py-6 text-lg rounded-full"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <Tabs defaultValue="guest" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="guest">For Guests</TabsTrigger>
              <TabsTrigger value="host">For Hosts</TabsTrigger>
            </TabsList>
            <TabsContent value="guest">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Booking and Payments</CardTitle>
                    <CardDescription>Get help with your reservations and payments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I book a stay?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          What payment methods are accepted?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I cancel a reservation?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          What is the cancellation policy?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Button variant="link" className="flex items-center gap-1 p-0 mt-2">
                          View all articles <ArrowRight className="h-4 w-4" />
                        </Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your profile and account details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I create an account?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I reset my password?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I update my profile?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I delete my account?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Button variant="link" className="flex items-center gap-1 p-0 mt-2">
                          View all articles <ArrowRight className="h-4 w-4" />
                        </Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>During Your Stay</CardTitle>
                    <CardDescription>Get help during your trip</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I contact my host?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          What if something is missing or broken?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I extend my stay?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          What if I need to check out early?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Button variant="link" className="flex items-center gap-1 p-0 mt-2">
                          View all articles <ArrowRight className="h-4 w-4" />
                        </Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Safety and Accessibility</CardTitle>
                    <CardDescription>Learn about safety features and accessibility options</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          What safety measures are in place?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I find accessible stays?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          What should I do in case of emergency?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I report a safety concern?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Button variant="link" className="flex items-center gap-1 p-0 mt-2">
                          View all articles <ArrowRight className="h-4 w-4" />
                        </Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="host">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Hosting Basics</CardTitle>
                    <CardDescription>Learn the fundamentals of hosting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I become a host?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          What are the hosting requirements?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I create a listing?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How much should I charge?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Button variant="link" className="flex items-center gap-1 p-0 mt-2">
                          View all articles <ArrowRight className="h-4 w-4" />
                        </Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Managing Bookings</CardTitle>
                    <CardDescription>Handle reservations and guest communications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I accept or decline bookings?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I communicate with guests?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I handle cancellations?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I update my calendar?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Button variant="link" className="flex items-center gap-1 p-0 mt-2">
                          View all articles <ArrowRight className="h-4 w-4" />
                        </Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payments and Taxes</CardTitle>
                    <CardDescription>Understand your earnings and tax obligations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How and when do I get paid?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          What fees does ChillAtHill charge?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I handle taxes?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I set up my payment details?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Button variant="link" className="flex items-center gap-1 p-0 mt-2">
                          View all articles <ArrowRight className="h-4 w-4" />
                        </Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Host Protection and Insurance</CardTitle>
                    <CardDescription>Learn about coverage and protection programs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          What is ChillCover for hosts?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I file a damage claim?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          What liability protection do I have?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex items-center justify-between text-sm hover:underline">
                          How do I report a problem guest?
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <Button variant="link" className="flex items-center gap-1 p-0 mt-2">
                          View all articles <ArrowRight className="h-4 w-4" />
                        </Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Can't find what you're looking for?</h2>
              <p className="mb-8">Our support team is here to help you with any questions or concerns.</p>
              <Button size="lg" className="rounded-full bg-rose-500 hover:bg-rose-600">
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

