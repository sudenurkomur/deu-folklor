export interface SEOData {
  title: string
  description: string
  path?: string
}

export const defaultSEO: SEOData = {
  title: "DFAT",
  description: "Dokuz Eylül Üniversitesi Folklor Araştırma Topluluğu resmi web sitesi. Geleneksel halk danslarımızı tanıyın, etkinliklerimizi takip edin ve topluluğumuzla tanışın.",
}

export function formatPageTitle(title: string): string {
  return `${title} | Dokuz Eylül Üniversitesi Folklor Araştırma Topluluğu`
}

