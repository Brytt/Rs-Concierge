import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LifestyleContent } from "@/components/lifestyle-content"

export const metadata: Metadata = {
  title: "Dubai Lifestyle | RS Concierge - Living, Working, Enjoying",
  description: "Experience the best of Dubai lifestyle - luxury living, premium experiences, and exclusive opportunities in the UAE.",
}

export default function LifestylePage() {
  return (
    <main>
      <Header />
      <LifestyleContent />
      <Footer />
    </main>
  )
}
