import { Helmet } from "react-helmet-async"
import { Section } from "@/components/Section"
import { formatPageTitle } from "@/lib/seo"

export function About() {
  return (
    <>
      <Helmet>
        <title>{formatPageTitle("Hakkımızda")}</title>
        <meta name="description" content="9 Eylül Folklore Topluluğu hakkında bilgiler, misyon, vizyon ve tarihçe." />
      </Helmet>

      <Section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Mission */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-center">Misyonumuz</h2>
            <p className="text-lg leading-relaxed text-primary/70" style={{ textAlign: "justify" }}>
              Türk halk kültürünün zenginliğini gelecek nesillere aktarmak, geleneksel 
              halk danslarını yaşatmak ve gençlerimizi kültürel değerlerimaizle buluşturmak 
              misyonuyla hareket ediyoruz. Topluluğumuz, öğrencilerimize halk dansları 
              konusunda eğitim verirken aynı zamanda kültürel farkındalık ve bilinç 
              kazandırmayı hedefler.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-center">Vizyonumuz</h2>
            <p className="text-lg leading-relaxed text-primary/70" style={{ textAlign: "justify" }}>
              Türkiye'nin önde gelen üniversite folklor topluluklarından biri olmak, 
              düzenlediğimiz etkinliklerle hem üniversite hem de şehir genelinde kültürel 
              faaliyetlere katkıda bulunmak. Gelecek nesillerin geleneksel değerlerimizi 
              benimsemiş, bu değerleri yaşatan ve geleceğe taşıyan bireyler olarak 
              yetişmesine katkı sağlamak.
            </p>
          </div>

          {/* History */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-center">Tarihçe</h2>
            <p className="text-lg leading-relaxed text-primary/70" style={{ textAlign: "justify" }}>
              Dokuz Eylül Üniversitesi Folklor Araştırma Topluluğu, 1992'de bir grup tutkulu öğrenci tarafından 
              kurulmuş, o günden bu yana üniversitemizde önemli bir kültürel faaliyet 
              alanı oluşturmuştur. Topluluğumuz, Türkiye'nin farklı bölgelerinden halk 
              danslarını sergileyerek izleyicilerimize unutulmaz anlar yaşatmaktadır.
            </p>
          </div>

            {/* Quote */}
            <div className="pt-8 text-center">
            <p className="italic text-xl text-primary/80">
              “DFAT'lı Hayatlar Güzeldir”
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

