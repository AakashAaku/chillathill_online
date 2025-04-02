"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Globe, Menu, User } from "lucide-react"
import { Logo } from "./logo"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Logo className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center rounded-full border shadow-sm px-4 py-2 hover:shadow-md transition-shadow">
            <button className="text-sm font-medium px-3">Anywhere</button>
            <span className="h-4 w-px bg-gray-300"></span>
            <button className="text-sm font-medium px-3">Any week</button>
            <span className="h-4 w-px bg-gray-300"></span>
            <button className="text-sm text-gray-500 px-3">Add guests</button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full bg-rose-500 text-white hover:bg-rose-600"
              asChild
            >
              <Link href="/search">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex rounded-full" asChild>
              <Link href="/host">Become a Host</Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Language</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full flex gap-2 p-2 border-gray-300"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Menu className="h-5 w-5" />
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-60">
                <DropdownMenuItem asChild>
                  <Link href="/auth/signup" className="cursor-pointer font-medium w-full">
                    Sign up
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/login" className="cursor-pointer w-full">
                    Log in
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/host" className="cursor-pointer w-full">
                    Host your home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/host/experience" className="cursor-pointer w-full">
                    Host an experience
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/help" className="cursor-pointer w-full">
                    Help
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden px-4 pb-4">
        <Button
          className="w-full rounded-full justify-start text-left px-4 py-3 bg-white border shadow-sm hover:shadow-md"
          variant="outline"
          asChild
        >
          <Link href="/search">
            <Search className="h-4 w-4 mr-2" />
            <span>Where to? Anywhere • Any week • Add guests</span>
          </Link>
        </Button>
      </div>
    </header>
  )
}

