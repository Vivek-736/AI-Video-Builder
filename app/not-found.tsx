"use client";
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground transition-colors">
      <div className="container flex max-w-[1200px] flex-col items-center justify-center gap-4 px-4 py-16 md:gap-8 md:py-24">

        <h1 className="text-center text-6xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
          404
        </h1>

        <h2 className="text-center text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">Page not found</h2>

        <p className="max-w-[600px] text-center text-muted-foreground md:text-xl">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </div>
  )
}