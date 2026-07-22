import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BusinessConciergeContent } from "@/components/business-concierge-content"

export const metadata: Metadata = {
  title: "Business Concierge | RS Concierge - Dubai",
  description:
    "Company formation, visa & immigration, corporate taxation and banking services in the UAE, managed personally by RS Concierge.",
}

export default function BusinessConciergePage() {
  return (
    <main>
      <Header />
      <BusinessConciergeContent />
      <Footer />
    </main>
  )
}
