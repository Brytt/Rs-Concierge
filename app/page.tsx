import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HomeIntro } from "@/components/home-intro"
import { HomeStats } from "@/components/home-stats"
import { HomeServices } from "@/components/home-services"
import { HomeLifestyleEditorial } from "@/components/home-lifestyle-editorial"
import { HomeWhy } from "@/components/home-why"
import { HomeTestimonials } from "@/components/home-testimonials"
import { HomeContact } from "@/components/home-contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <HomeIntro />
      <HomeStats />
      <HomeServices />
      <HomeLifestyleEditorial />
      <HomeWhy />
      <HomeTestimonials />
      <HomeContact />
      <Footer />
    </main>
  )
}
