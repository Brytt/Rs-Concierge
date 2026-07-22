import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LifestyleConciergeContent } from "@/components/lifestyle-concierge-content"

export const metadata: Metadata = {
  title: "Lifestyle Concierge | RS Concierge - Dubai",
  description:
    "Aviation, marine, automotive, accommodation, experiences, wellness and security — private lifestyle management in Dubai, arranged personally by RS Concierge.",
}

export default function LifestyleConciergePage() {
  return (
    <main>
      <Header />
      <LifestyleConciergeContent />
      <Footer />
    </main>
  )
}
