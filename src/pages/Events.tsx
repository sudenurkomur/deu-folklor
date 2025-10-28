import { HelmetProvider } from "@dr.pogodin/react-helmet"
import { EventCard } from "@/components/EventCard"
import { Section } from "@/components/Section"
import { formatPageTitle } from "@/lib/seo"

// Sample data - in production, this would come from Contentlayer
const events = [
  {
    slug: "sene-sonu",
    title: "Sene Sonu Eğlencesi",
    date: "2025-06-16",
    location: "FREED",
    cover: "/images/eventsimages/senesonu.jpeg",
    summary: "Sene sonunu hep birlikte eğlenerek kapattık",
    tags: ["Eğlence"]
  },
  {
    slug: "resmi-toren",
    title: "19 Mayıs Gösterisi",
    date: "2025-05-19",
    location: "Gündoğdu Meydanı , Alsancak",
    cover: "/images/eventsimages/19mayıs.jpeg",
    summary: "Resmi törende özel gösteri gerçekleştirildi",
    tags: ["Gösteri", "Dans"]
  },
  {
    slug: "gezi",
    title: "Ankara Gezisi",
    date: "2025-04-06",
    location: "Ankara",
    cover: "/images/eventsimages/ankara.JPG",
    summary: "Şehir dışı gezileri",
    tags: ["Gezi", "Eğlence"]
  },
  {
    slug: "tanışma-24",
    title: "Tanışma Etkinliği",
    date: "2024-12-10",
    location: "FREED",
    cover: "/images/eventsimages/tanısma.JPG",
    summary: "Yeni dansçılarımızla tanışma etkinliği",
    tags: [ "Eğlence"]
  },
  {
    slug: "yılbaşı-25",
    title: "Yılbaşı Eğlencesi",
    date: "2024-12-28",
    location: "Hungry Dog",
    cover: "/images/eventsimages/yılbası.JPG",
    summary: "Yeni yılı hep birlikte kutluyoruz",
    tags: [ "Eğlence"]
  }
  
]

export function Events() {
  return (
    <>
      <HelmetProvider>
        <title>{formatPageTitle("Etkinlikler")}</title>
        <meta name="description" content="Dokuz Eylül Folklor Topluluğu etkinlik takvimi ve duyurular." />
      </HelmetProvider>

      <Section
        title="Etkinlikler"
        subtitle="Yaklaşan ve geçmiş etkinliklerimiz"
        className="container mx-auto px-4 py-16"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.slug} {...event} />
          ))}
        </div>
      </Section>
    </>
  )
}

