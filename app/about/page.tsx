import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "About | RS Concierge - Radomir Sverckov",
  description: "Meet Radomir Sverckov - Private Concierge in Dubai. Years of experience in automotive and business industry, now providing luxury lifestyle management services in the UAE.",
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutContent />
      <Footer />
    </main>
  )
}
