# 9 Eylül Folklore Topluluğu - Web Sitesi

9 Eylül Üniversitesi Folklore Topluluğu için modern, sade, mobil uyumlu ve production-ready bilgilendirme sitesi.

## 🚀 Teknolojiler

- **React 19** + **Vite** - Hızlı geliştirme ve build
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Modern, responsive styling
- **shadcn/ui** - Yüksek kaliteli UI bileşenleri
- **React Router** - Sayfa yönlendirme
- **react-helmet-async** - SEO optimizasyonu
- **Embla Carousel** - Erişilebilir slider
- **date-fns** - Tarih formatlama

## 📋 Gereksinimler

- Node.js 20.19+ veya 22.12+
- npm veya yarn

## 🛠️ Kurulum

1. **Projeyi klonlayın** (zaten mevcut)

2. **Bağımlılıkları yükleyin:**
```bash
npm install --legacy-peer-deps
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

Site `http://localhost:5173` adresinde açılacaktır.

## 📁 Proje Yapısı

```
src/
  ├── components/        # Yeniden kullanılabilir bileşenler
  │   ├── ui/           # shadcn/ui bileşenleri
  │   ├── Navbar.tsx    # Navigasyon çubuğu
  │   ├── Footer.tsx    # Footer bileşeni
  │   ├── Slider.tsx    # Hero slider
  │   ├── ProjectCard.tsx
  │   ├── EventCard.tsx
  │   └── Section.tsx
  ├── pages/            # Sayfa bileşenleri
  │   ├── Home.tsx
  │   ├── Projects.tsx
  │   ├── Events.tsx
  │   ├── About.tsx
  │   └── Contact.tsx
  ├── layout/           # Layout bileşenleri
  │   └── RootLayout.tsx
  ├── lib/              # Yardımcı fonksiyonlar
  │   ├── utils.ts      # cn() fonksiyonu
  │   ├── seo.ts        # SEO yardımcıları
  │   └── helpers.ts    # Genel yardımcılar
  ├── App.tsx           # Ana routing
  └── main.tsx          # Entry point
```

## 🎨 İçerik Yönetimi

### İçerik Ekleme

Şu anda içerik **hardcoded** olarak sayfalarda bulunmaktadır. Production ortamı için:

1. **Projeler:** `src/pages/Projects.tsx` içindeki `projects` dizisini güncelleyin
2. **Etkinlikler:** `src/pages/Events.tsx` içindeki `events` dizisini güncelleyin

### Veri Yapısı

**Proje Verisi:**
```typescript
{
  slug: string           // URL-friendly slug
  title: string          // Başlık
  date: string          // YYYY-MM-DD formatında tarih
  cover: string         // Görsel URL'i
  summary: string       // Kısa açıklama
  tags?: string[]      // Etiketler
}
```

**Etkinlik Verisi:**
```typescript
{
  slug: string           // URL-friendly slug
  title: string          // Başlık
  date: string          // YYYY-MM-DD formatında tarih
  location?: string     // Konum
  cover: string         // Görsel URL'i
  summary: string       // Kısa açıklama
  tags?: string[]      // Etiketler
}
```

## 🖼️ Görseller

Projenin çalışması için aşağıdaki görselleri ekleyin:

1. **Logo:** `public/images/logo.png` (Önerilen boyut: 200x200px)
2. **Slider Görselleri:**
   - `public/images/slider/slide1.jpg`
   - `public/images/slider/slide2.jpg`
   - `public/images/slider/slide3.jpg`
   - (Önerilen boyut: 1920x1080px)

Görselleri temin ettikten sonra dosyaları ilgili klasörlere yerleştirin.

## ⚙️ Ortam Değişkenleri

`.env` dosyası oluşturun (`.env.example` dosyasını kopyalayarak):

```bash
VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform
```

Google Form URL'inizi buraya ekleyin. İletişim sayfasındaki "Formu Aç" butonu bu linki kullanacaktır.

## 🎨 Renk Paleti

Projede kullanılan özel renkler:

```javascript
primary: '#0A0A0A'    // Siyah
background: '#FFFFFF'  // Beyaz
accent: '#F6F1E9'      // Krem
muted: '#E7E2DA'       // Açık krem
```

Bu renkler `tailwind.config.js` içinde tanımlanmıştır.

## ♿ Erişilebilirlik

Proje, erişilebilirlik standartlarına uygun olarak geliştirilmiştir:

- ✅ Skip-link (ana içeriğe atlama)
- ✅ Klavye navigasyonu
- ✅ Ekran okuyucu uyumlu ARIA etiketleri
- ✅ Odak göstergeleri (focus-visible)
- ✅ Yeterli renk kontrastı
- ✅ Semantic HTML5 elementleri

## 📊 SEO

- `react-helmet-async` ile sayfa bazlı meta tag'ler
- Open Graph desteği
- `/sitemap.xml` ve `/robots.txt` dosyaları
- Semantik HTML yapısı
- Semantic markup (landmarks, roles)

## 📱 Responsive Design

Site **tamamen responsive** tasarlanmıştır:

- **Mobil:** < 768px (tek sütun, hamburger menü)
- **Tablet:** 768px - 1024px (grid 2 sütun)
- **Desktop:** > 1024px (grid 3 sütun, tam menü)

Breakpoint'ler:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

## 🚢 Build ve Deploy

### Production Build

```bash
npm run build
```

Build dosyaları `dist/` klasörüne oluşturulur.

### Preview

Build'den önce önizleme yapın:

```bash
npm run preview
```

### Deployment

#### Vercel

1. GitHub'a push edin
2. [Vercel](https://vercel.com)'de projeyi import edin
3. Environment variables ekleyin (VITE_GOOGLE_FORM_URL)
4. Deploy edin

#### Netlify

1. GitHub'a push edin
2. [Netlify](https://netlify.com)'da "New site from Git" seçin
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Environment variables ekleyin
6. Deploy edin

#### Manual Deployment

1. `npm run build` çalıştırın
2. `dist/` klasöründeki dosyaları sunucunuza yükleyin
3. `.env` dosyasını production değerleriyle güncelleyin

## 🐛 Bilinen Sorunlar

- Node.js versiyonu 20.19+ gerekiyor (warnings göz ardı edilebilir)

## 📝 Lisans

Bu proje eğitim amaçlıdır. Ticari kullanım için gerekli izinleri alınız.

## 👥 İletişim

Sorularınız için: info@9eylulfolklore.com

---

**© 2024 9 Eylül Folklore Topluluğu** 🎭
