export interface SEOData {
  title: string
  description: string
  path?: string
}

export const defaultSEO: SEOData = {
  title: "9 Eylül Folklore Topluluğu",
  description: "9 Eylül Üniversitesi Folklore Topluluğu resmi web sitesi. Geleneksel halk danslarımızı tanıyın, etkinliklerimizi takip edin ve topluluğumuzla tanışın.",
}

export function formatPageTitle(title: string): string {
  return `${title} | 9 Eylül Folklore Topluluğu`
}

