export const metadata = {
  title: "Tower Home Page",
  description: "Landing page describing what Tower does",
}

import BookDemo from "@/components/book-demo"
import Features from "@/components/features"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <FeaturesBlocks /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
      <BookDemo />
    </>
  )
}
