import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesContent } from "@/components/services-content"

export const metadata: Metadata = {
  title: "Services | RS Concierge - Dubai's Most Exclusive Experiences",
  description: "Private jet charter, helicopter experiences, luxury car rentals, yacht charters, VIP concierge, and exclusive events in Dubai and the UAE.",
}

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <ServicesContent />
      <Footer />
    </main>
  )
}
