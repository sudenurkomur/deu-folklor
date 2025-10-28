import { Helmet } from "react-helmet-async"
import { ProjectCard } from "@/components/ProjectCard"
import { Section } from "@/components/Section"
import { formatPageTitle } from "@/lib/seo"

// Sample data - in production, this would come from Contentlayer
const projects = [
  {
    slug: "geleneksel-halk-danslari",
    title: "Leyla ile Mecnun",
    date: "2025-05-10",
    cover: "/images/projectimages/2025.png",
    summary: "Leyla ile Mecnun hikayesini canlandıran, tiyatral dans gösterisi projesi",
    tags: [" Tiyatral Dans", "Kültür" , "Gösteri"]
  },
  {
    slug: "kultur-festivali",
    title: "Seyran",
    date: "2024-05-12",
    cover: "/images/projectimages/2024.png",
    summary: "Halk danslarını canlandıran, kültürel mirasımızı korumaya yönelik proje",
    tags: [" Tiyatral Dans", "Kültür", "Gösteri"]
  },
  {
    slug: "ogrenci-dayanismasi",
    title: "Azade",
    date: "2022-05-29",
    cover: "/images/projectimages/2022.png",
    summary: "Halk danslarını canlandıran, kültürel mirasımızı korumaya yönelik proje",
    tags: ["Kültür", "Gösteri"]
  },
  {
    slug: "geleneksel-halk-danslari",
    title: "Dumlupınar; Son Nefes",
    date: "2018-05-06",
    cover: "/images/projectimages/2018.png",
    summary: "Halk danslarını canlandıran, kültürel mirasımızı korumaya yönelik proje",
    tags: ["Kültür", "Gösteri"]
  },
  {
    slug: "kultur-festivali",
    title: "Bir Bayrak Rüzgar Bekliyor",
    date: "2017-05-21",
    cover: "/images/projectimages/2017.png",
    summary: "Halk danslarını canlandıran, kültürel mirasımızı korumaya yönelik proje",
    tags: ["Kültür", "Gösteri"]
  },
  {
    slug: "ogrenci-dayanismasi",
    title: "Kurtuluş",
    date: "2016-05-23",
    cover: "/images/projectimages/2016.png",
    summary: "Halk danslarını canlandıran, kültürel mirasımızı korumaya yönelik proje",
    tags: ["Kültür", "Gösteri"]
  }
]

export function Projects() {
  return (
    <>
      <Helmet>
        <title>{formatPageTitle("Projeler")}</title>
        <meta name="description" content="Dokuz Eylül Folklor Araştırma Topluluğu tarafından gerçekleştirilen projeler ve etkinlikler." />
      </Helmet>

      <Section
        title="Projeler"
        subtitle="Topluluk olarak gerçekleştirdiğimiz projeleri keşfedin"
        className="container mx-auto px-4 py-16"
      >
        <div className="grid gap-6 md:grid-cols-5 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </Section>
    </>
  )
}

