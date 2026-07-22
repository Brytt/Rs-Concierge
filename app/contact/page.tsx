import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Contact | RS Concierge - Private Inquiry",
  description: "Contact Radomir Sverckov for private assistance and inquiries in Dubai. WhatsApp, Instagram, Email available.",
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactContent />
      <Footer />
    </main>
  )
}
