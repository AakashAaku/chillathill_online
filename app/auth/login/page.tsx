import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Facebook, Github } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <Link href="/" className="mb-4">
            <Logo className="h-8 w-auto" />
          </Link>
          <CardTitle className="text-2xl">Log in to ChillAtHill</CardTitle>
          <CardDescription>Enter your email and password to login to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/auth/forgot-password" className="text-sm text-rose-500 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600">
            Log in
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </Button>
            <Button variant="outline" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-rose-500 hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

