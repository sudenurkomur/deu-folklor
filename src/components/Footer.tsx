import { Instagram, Youtube, Music } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">

              <span className="text-sm font-bold text-center">
                Dokuz Eylül Üniversitesi Folklor Araştırma Topluluğu
              </span>
            </div>
            <p className="text-sm text-primary/70">
              Geleneksel halk danslarımızı yaşatıyor, kültürümüzü gelecek nesillere taşıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/projeler"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="/etkinlikler"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  Etkinlikler
                </a>
              </li>
              <li>
                <a
                  href="/hakkimizda"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="/iletisim"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">Sosyal Medya</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.instagram.com/deuhalkoyunlari/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-primary/70 hover:text-primary transition-colors"
                aria-label="Instagram'ı ziyaret et"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@dfat1992"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-primary/70 hover:text-primary transition-colors"
                aria-label="YouTube'u ziyaret et"
              >
                <Youtube className="h-5 w-5" />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.tiktok.com/@dfat1992?_t=ZS-90ubJNrR8Ku&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-primary/70 hover:text-primary transition-colors"
                aria-label="TikTok'u ziyaret et"
              >
                <Music className="h-5 w-5" />
                <span>TikTok</span>
              </a>
              
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary/10">
          <p className="text-center text-sm text-primary/60">
            © {currentYear} Dokuz Eylül Üniversitesi Folklor Araştırma Topluluğu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

