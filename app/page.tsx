import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-card p-4">
      <div className="text-center space-y-8">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
            <div className="w-8 h-8 bg-primary-foreground rounded-sm"></div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground text-balance">SynergySphere</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-md mx-auto">
            Advanced Team Collaboration Platform
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/signup">Create Account</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
