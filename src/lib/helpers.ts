import { format } from "date-fns"
import { tr } from "date-fns/locale"

export function formatDate(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return format(dateObj, "d MMMM yyyy", { locale: tr })
}

export function formatDateShort(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return format(dateObj, "d MMM yyyy", { locale: tr })
}

