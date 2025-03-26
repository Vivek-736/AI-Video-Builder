/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useRef } from "react"
import Navbar from "@/components/Home/Navbar"
import Footer from "@/components/Home/Footer"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, Play, Video, Wand2, Zap } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section ref={ref} initial="hidden" animate={controls} variants={staggerContainer} className={className}>
      {children}
    </motion.section>
  )
}

export default function Home() {
  const testimonialImages = [
    "https://wallpapers.com/images/hd/iron-man-minimalist-art-vjaph0urzrosn7a5.webp",
    "https://wallpapers.com/images/hd/marvel-captain-america-avenger-csbfpja79vzzvkao.webp",
    "https://wallpapers.com/images/hd/thor-of-asgard-vwg6absfzd5d7fb3.webp"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
        <AnimatedSection className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-900">
          <div className="container px-4 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-8 lg:gap-6 gap-12">
              <motion.div variants={fadeIn} className="space-y-6">
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium">
                  AI-Powered Video Creation
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                  Create Stunning Videos with <span className="text-purple-600 dark:text-purple-400">AI</span> in Minutes
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                  Transform your ideas into professional videos without any technical skills. Our AI-powered platform
                  makes video creation simple, fast, and affordable.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/sign-in">
                    <Button size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 cursor-pointer dark:hover:bg-purple-600">
                      Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/sign-in">
                    <Button variant="outline" size="lg" className="cursor-pointer rounded-full border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30">
                      Watch Demo <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="relative">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-900/10 overflow-hidden shadow-xl border border-purple-200 dark:border-purple-800/50">
                  <img
                    src="/hero.jpg"
                    alt="AI Video Builder Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-200/50 dark:bg-purple-800/30 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-purple-100/50 to-transparent dark:from-purple-900/30"></div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-gray-100 dark:bg-gray-950">
          <div className="container px-4 mx-auto">
            <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Powerful Features for Video Creation
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our AI-powered platform offers everything you need to create professional videos without any technical
                expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Wand2 className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
                  title: "AI Script Generation",
                  description:
                    "Generate engaging scripts for your videos with just a few prompts. Our AI understands your needs and creates compelling content.",
                },
                {
                  icon: <Video className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
                  title: "Automatic Scene Creation",
                  description:
                    "Transform your script into scenes automatically. Our AI selects the perfect visuals to match your content.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
                  title: "One-Click Rendering",
                  description:
                    "Render your videos in minutes, not hours. Our cloud-based rendering system handles all the heavy lifting.",
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
                  title: "Professional Templates",
                  description:
                    "Choose from hundreds of professional templates designed for various industries and purposes.",
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
                  title: "Voice Synthesis",
                  description:
                    "Add natural-sounding voiceovers to your videos with our advanced AI voice synthesis technology.",
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
                  title: "Smart Editing",
                  description:
                    "Edit your videos with ease using our intuitive interface. No technical skills required.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-slate-50 dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 hover:border-purple-200 dark:hover:border-purple-800/50 group"
                >
                  <div className="mb-4 p-3 bg-purple-100/50 dark:bg-purple-900/20 inline-block rounded-lg group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-slate-100 dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Create professional videos in just three simple steps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Describe Your Video",
                  description:
                    "Tell our AI what kind of video you want to create. Provide a brief description or some keywords.",
                },
                {
                  step: "02",
                  title: "Review and Edit",
                  description:
                    "Our AI generates a draft. Review it, make any necessary changes, and customize to your liking.",
                },
                {
                  step: "03",
                  title: "Export and Share",
                  description:
                    "Export your video in high quality and share it directly to social media or download for later use.",
                },
              ].map((step, index) => (
                <motion.div key={index} variants={fadeIn} className="relative">
                  <div className="bg-white dark:bg-gray-950 p-8 rounded-xl border border-gray-100 dark:border-gray-800 h-full hover:border-purple-200 dark:hover:border-purple-800/50 transition-colors">
                    <div className="text-5xl font-bold text-purple-300 dark:text-purple-700 mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-purple-400 dark:text-purple-600">
                      <ArrowRight className="h-8 w-8" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-gray-100 dark:bg-gray-950">
          <div className="container px-4 mx-auto">
            <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Users Say</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Join thousands of satisfied creators who have transformed their video production process
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "This tool has completely transformed how we create marketing videos. What used to take days now takes minutes.",
                  name: "Tony Stark",
                  title: "Tech Entrepreneur",
                  avatar: testimonialImages[0],
                },
                {
                  quote:
                    "As a content creator, I need to produce videos quickly. This AI tool has been a game-changer for my workflow.",
                  name: "Steve Rogers",
                  title: "Captain America",
                  avatar: testimonialImages[1],
                },
                {
                  quote:
                    "The quality of videos I can create with this tool is incredible. My clients are always impressed with the results.",
                  name: "Thor",
                  title: "God of Thunder",
                  avatar: testimonialImages[2],
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-slate-50 dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-800/50 transition-colors"
                >
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-purple-200 dark:border-purple-800"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-slate-100 dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Choose the plan that works best for your needs</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$19",
                  description: "Perfect for beginners and small projects",
                  features: [
                    "5 videos per month",
                    "720p video quality",
                    "Basic templates",
                    "AI script generation",
                    "Email support",
                  ],
                  cta: "Get Started",
                  popular: false,
                },
                {
                  name: "Professional",
                  price: "$49",
                  description: "Ideal for content creators and small businesses",
                  features: [
                    "20 videos per month",
                    "1080p video quality",
                    "All templates",
                    "Advanced AI features",
                    "Priority support",
                    "Custom branding",
                  ],
                  cta: "Get Started",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "$99",
                  description: "For businesses with high volume needs",
                  features: [
                    "Unlimited videos",
                    "4K video quality",
                    "Advanced AI features",
                    "Custom branding",
                    "API access",
                  ],
                  cta: "Contact Sales",
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className={`bg-white dark:bg-gray-950 p-8 rounded-xl border ${
                    plan.popular
                      ? "border-purple-500 shadow-lg scale-105 relative z-10"
                      : "border-gray-100 dark:border-gray-800"
                  } transition-all hover:shadow-md`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/sign-in">
                    <Button
                      className={`w-full ${plan.popular ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"}`}
                      variant={plan.popular ? "default" : "outline"}
                      >
                      {plan.cta}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div variants={fadeIn} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Ready to Transform Your Video Creation Process?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Join thousands of creators and businesses who are already using our AI-powered video builder to create
                  stunning videos in minutes.
                </p>
                <div className="pt-4">
                  <Link href="/sign-in">
                    <Button size="lg" className="rounded-full cursor-pointer bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
                      Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    No credit card required. 7-day free trial.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}