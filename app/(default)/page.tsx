export const metadata = {
  title: "Tower",
  description:
    "AI assistant for in-house legal; automated matter intake, document management, and much more.",
}

import Features from "@/components/features"
import Hero from "@/components/hero"
import WaitList from "@/components/waitlist"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <FeaturesBlocks /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
      {/* <BookDemo /> */}
      <WaitList />
    </>
  )
}
