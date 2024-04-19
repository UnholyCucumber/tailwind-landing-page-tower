export const metadata = {
  title: "Tower Home Page",
  description: "Landing page describing what Tower does",
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
