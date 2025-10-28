import { HelmetProvider } from "@dr.pogodin/react-helmet"
import { Slider } from "@/components/Slider"
import { Section } from "@/components/Section"
import { YouTubeCard } from "@/components/YouTubeCard"
import { EventCard } from "@/components/EventCard"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { defaultSEO } from "@/lib/seo"

const slides = [
  {
    src: "/images/slider/slide3.jpg",
    alt: "Folklore dans gösterisi"
  },
  {
    src: "/images/slider/slide2.jpg",
    alt: "Topluluk gösterisi"
  },
  {
    src: "/images/slider/slide1.jpg",
    alt: "Kültürel etkinlik"
  },
  {
    src: "/images/slider/slide5.jpg",
    alt: "Topluluk gösterisi"
  },
  {
    src: "/images/slider/slide6.jpg",
    alt: "Kültürel etkinlik"
  }
]

// YouTube Video Data
const featuredVideos = [
  {
    title: "Leyla ile Mecnun",
    url: "https://www.youtube.com/watch?v=mqznk2WXD04&t=3943s"
  },
  {
    title: "Seyran",
    url: "https://youtu.be/XVbZzM9MQyc?si=pYjGtwRHGpKaahEJ"
  },
  {
    title: "Azade",
    url: "https://youtu.be/YdfCcOtHQKI?si=vqz8r45o21YVRFvc"
  },
  {
    title: "BALKANLARDAN ANADOLUYA BARIŞ RAKSI",
    url: "https://youtu.be/MlfV8a8d0qo?si=v2rZAkIzG5Gki3Tc"
  }
]

const Events = [
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
  }
]

export function Home() {
  return (
    <>
      <HelmetProvider>
        <title>{defaultSEO.title}</title>
        <meta name="description" content={defaultSEO.description} />
      </HelmetProvider>

      {/* Hero Section with Slider */}
      <section className="relative">
        <Slider slides={slides} />
        <div className="container absolute bottom-20 left-0 right-0 z-10 mx-auto px-4 text-center">
          <h2 className="mb-4 text-white drop-shadow-lg">Dokuz Eylül Üniversitesi Folklor Araştırma Topluluğu</h2>
          <p className="mx-auto max-w-2xl text-lg text-white drop-shadow-lg">
            Geleneksel halk danslarımızı yaşatıyor, kültürümüzü gelecek nesillere taşıyoruz.
          </p>
        </div>
      </section>

      {/* Featured Videos */}
      <Section
        title="Projelerimizden Seçmeler"
        subtitle="Topluluk olarak gerçekleştirdiğimiz projeleri keşfedin"
        className="container mx-auto px-4 py-16"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredVideos.map((video, index) => (
            <YouTubeCard key={index} title={video.title} url={video.url} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/projeler">
            <Button variant="outline" size="lg">
              Tüm Projeleri Görüntüle
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section
        title="Etkinliklerimiz"
        subtitle="Kaçırılmaması gereken etkinliklerimiz"
        className="container mx-auto px-4 py-16 bg-accent"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Events.map((event) => (
            <EventCard key={event.slug} {...event} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/etkinlikler">
            <Button variant="outline" size="lg">
              Tüm Etkinlikleri Görüntüle
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}

