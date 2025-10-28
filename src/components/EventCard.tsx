import { Link } from "react-router-dom"
import { Calendar, MapPin } from "lucide-react"
import { formatDateShort } from "@/lib/helpers"

export interface EventCardProps {
  slug: string
  title: string
  date: string
  location?: string
  cover: string
  summary: string
  tags?: string[]
}

export function EventCard({
  slug,
  title,
  date,
  location,
  cover,
  summary,
  tags,
}: EventCardProps) {
  return (
    <Link
      to={`/etkinlikler/`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-primary/10 bg-background transition-all hover:shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={cover}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex flex-col gap-1 text-sm text-primary/60">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDateShort(date)}</time>
          </div>
          {location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          )}
        </div>
        <h3 className="mb-2 text-xl font-semibold group-hover:text-primary/80">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-sm text-primary/70 line-clamp-3">
          {summary}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent px-3 py-1 text-xs text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}

