import { Globe } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Safety information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Cancellation options
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Our COVID-19 Response
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Supporting people with disabilities
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  ChillAtHill.org: disaster relief housing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Support Afghan refugees
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Combating discrimination
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Try hosting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  ChillCover: protection for Hosts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Explore hosting resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Visit our community forum
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  How to host responsibly
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Learn about new features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Letter from our founders
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Investors
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <p className="text-sm">© 2023 ChillAtHill, Inc.</p>
            <span>·</span>
            <Link href="#" className="text-sm hover:underline">
              Privacy
            </Link>
            <span>·</span>
            <Link href="#" className="text-sm hover:underline">
              Terms
            </Link>
            <span>·</span>
            <Link href="#" className="text-sm hover:underline">
              Sitemap
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-medium">
              <Globe className="h-4 w-4" />
              English (US)
            </button>
            <button className="text-sm font-medium">$ USD</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

