import type React from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock, Layout, Star, Users, Zap, Shield, Smartphone, Repeat } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Layout className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">TaskMaster</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground animate-gradient">
            Master Your Tasks, <br />
            Conquer Your Day
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            TaskMaster empowers you to organize your life with powerful task management tools. Stay productive, meet
            deadlines, and achieve your goals with unparalleled ease.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Start for Free <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Choose TaskMaster?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<CheckCircle2 className="h-8 w-8" />}
              title="Smart Task Organization"
              description="Organize tasks into projects, set priorities, and track progress effortlessly."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8" />}
              title="Time Management"
              description="Never miss a deadline with our intuitive calendar integration and reminders."
            />
            <FeatureCard
              icon={<Layout className="h-8 w-8" />}
              title="Beautiful Interface"
              description="Enjoy a clean, modern interface designed for maximum productivity."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Quick Actions"
              description="Add tasks, set reminders, and update progress with just a few clicks."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Team Collaboration"
              description="Share projects, assign tasks, and collaborate seamlessly with your team."
            />
            <FeatureCard
              icon={<Star className="h-8 w-8" />}
              title="Customization"
              description="Tailor TaskMaster to your workflow with custom fields, tags, and views."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Data Security"
              description="Your data is protected with industry-standard encryption and regular backups."
            />
            <FeatureCard
              icon={<Smartphone className="h-8 w-8" />}
              title="Mobile App"
              description="Access your tasks on-the-go with our powerful mobile app for iOS and Android."
            />
            <FeatureCard
              icon={<Repeat className="h-8 w-8" />}
              title="Recurring Tasks"
              description="Set up recurring tasks for habits, routines, and regular responsibilities."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">What Our Users Say</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="TaskMaster has completely transformed how I manage my daily tasks. It's intuitive and powerful!"
              author="Sarah L."
              role="Freelance Designer"
              rating={5}
            />
            <TestimonialCard
              quote="As a project manager, TaskMaster is invaluable. It keeps our team organized and on track."
              author="Michael R."
              role="Senior Project Manager"
              rating={5}
            />
            <TestimonialCard
              quote="I've tried many task management apps, but TaskMaster is by far the best. It's a game-changer!"
              author="Emily T."
              role="Entrepreneur"
              rating={5}
            />
            <TestimonialCard
              quote="The customization options in TaskMaster are unparalleled. It adapts perfectly to my workflow."
              author="David K."
              role="Software Engineer"
              rating={4}
            />
            <TestimonialCard
              quote="TaskMaster's mobile app is fantastic. I can manage my tasks anywhere, anytime."
              author="Lisa M."
              role="Marketing Manager"
              rating={5}
            />
            <TestimonialCard
              quote="The recurring tasks feature has helped me build better habits and stay consistent."
              author="Alex P."
              role="Personal Trainer"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Choose Your Plan</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <PricingCard
              title="Basic"
              price="Free"
              description="Perfect for individuals"
              features={["Unlimited tasks", "Basic project management", "Calendar integration", "Mobile app access"]}
              ctaText="Get Started"
              ctaLink="/register"
            />
            <PricingCard
              title="Pro"
              price="$9.99"
              description="Ideal for professionals"
              features={[
                "Everything in Basic",
                "Advanced project management",
                "Team collaboration",
                "Custom fields and tags",
                "Recurring tasks",
              ]}
              ctaText="Start Free Trial"
              ctaLink="/register?plan=pro"
              highlighted={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="For large teams and organizations"
              features={[
                "Everything in Pro",
                "Dedicated support",
                "Advanced security features",
                "API access",
                "Custom integrations",
              ]}
              ctaText="Contact Sales"
              ctaLink="/contact"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Boost Your Productivity?</h2>
          <p className="mb-8 text-lg">Join thousands of satisfied users and start mastering your tasks today.</p>
          <Link href="/register">
            <Button size="lg" variant="secondary" className="gap-2">
              Get Started Now <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Layout className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">TaskMaster</span>
            </div>
            <nav className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </Link>
              <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 TaskMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-lg border bg-card p-6 text-card-foreground hover:shadow-md transition-shadow">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  rating,
}: {
  quote: string
  author: string
  role: string
  rating: number
}) {
  return (
    <div className="rounded-lg border bg-card p-6 text-card-foreground">
      <div className="flex mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}

function PricingCard({
  title,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  highlighted = false,
}: {
  title: string
  price: string
  description: string
  features: string[]
  ctaText: string
  ctaLink: string
  highlighted?: boolean
}) {
  return (
    <div
      className={`rounded-lg border ${highlighted ? "border-primary" : ""} bg-card p-6 text-card-foreground flex flex-col`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-2">{price}</div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href={ctaLink}>
        <Button className="w-full" variant={highlighted ? "default" : "outline"}>
          {ctaText}
        </Button>
      </Link>
    </div>
  )
}

