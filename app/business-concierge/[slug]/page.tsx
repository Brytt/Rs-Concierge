import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BusinessCategoryContent } from "@/components/business-category-content"
import { businessCategories, getBusinessCategory } from "@/lib/business-concierge"

export function generateStaticParams() {
  return businessCategories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getBusinessCategory(slug)
  if (!category) return { title: "Business Concierge | RS Concierge" }
  return {
    title: `${category.title} | Business Concierge - RS Concierge`,
    description: category.intro,
  }
}

export default async function BusinessCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getBusinessCategory(slug)
  if (!category) notFound()

  return (
    <main>
      <Header />
      <BusinessCategoryContent slug={category.slug} />
      <Footer />
    </main>
  )
}
