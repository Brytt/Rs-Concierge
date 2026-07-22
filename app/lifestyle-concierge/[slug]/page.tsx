import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LifestyleCategoryContent } from "@/components/lifestyle-category-content"
import { lifestyleCategories, getLifestyleCategory } from "@/lib/lifestyle-concierge"

export function generateStaticParams() {
  return lifestyleCategories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getLifestyleCategory(slug)
  if (!category) return { title: "Lifestyle Concierge | RS Concierge" }
  return {
    title: `${category.title} | Lifestyle Concierge - RS Concierge`,
    description: category.intro,
  }
}

export default async function LifestyleCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getLifestyleCategory(slug)
  if (!category) notFound()

  return (
    <main>
      <Header />
      <LifestyleCategoryContent slug={category.slug} />
      <Footer />
    </main>
  )
}
