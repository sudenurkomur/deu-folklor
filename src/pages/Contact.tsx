import { Helmet } from "react-helmet-async"
import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail, MapPin } from "lucide-react"
import { formatPageTitle } from "@/lib/seo"

export function Contact() {
  const googleFormUrl = import.meta.env.VITE_GOOGLE_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLSexample"

  return (
    <>
      <Helmet>
        <title>{formatPageTitle("İletişim")}</title>
        <meta name="description" content="9 Eylül Folklore Topluluğu ile iletişime geçin. Sorularınız ve önerileriniz için bizimle iletişime geçebilirsiniz." />
      </Helmet>

      <Section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          <div className="text-center">
            <h2 className="mb-4">İletişim</h2>
            <p className="text-lg text-primary/70">
              Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilir veya 
              iletişim formumuzu doldurabilirsiniz.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid gap-6 md:grid-cols-2 justify-center items-center">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-accent p-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">E-posta</h3>
              <a
                href="mailto:info@9eylulfolklore.com"
                className="text-sm text-primary/70 hover:text-primary transition-colors"
              >
                difatdeu.1992@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-accent p-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Adres</h3>
              <p className="text-sm text-primary/70">
                Dokuz Eylül Üniversitesi<br />
                İzmir, Türkiye
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border border-primary/10 bg-accent/30 p-8 text-center">
            <h3 className="mb-4 text-xl font-semibold">İletişim Formu</h3>
            <p className="mb-6 text-primary/70">
              Sorularınız, önerileriniz veya başvurularınız için lütfen formu doldurun.
            </p>
            <Button
              onClick={() => window.open(googleFormUrl, "_blank")}
              size="lg"
            >
              Formu Aç
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="mb-4 text-xl font-semibold">Sosyal Medya</h3>
            <p className="mb-6 text-primary/70">
              Etkinliklerimizi ve güncel haberlerimizi takip etmek için sosyal medya hesaplarımızı ziyaret edebilirsiniz.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/deuhalkoyunlari/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent p-4 text-primary hover:bg-accent/80 transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@dfat1992"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent p-4 text-primary hover:bg-accent/80 transition-colors"
                aria-label="YouTube"
              >
                YouTube
              </a>
              <a
                href="https://www.tiktok.com/@dfat1992?_t=ZS-90ubJNrR8Ku&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent p-4 text-primary hover:bg-accent/80 transition-colors"
                aria-label="TikTok"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

