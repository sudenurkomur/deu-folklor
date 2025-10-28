import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export interface YouTubeCardProps {
  title: string
  url: string
  thumbnail?: string
  key?: string
}

export function YouTubeCard({ title, url, thumbnail }: YouTubeCardProps) {
  // YouTube URL'sinden video ID'sini çıkar
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  const videoId = getVideoId(url)
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : url
  
  // Thumbnail URL oluştur
  const thumbnailUrl = thumbnail || (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '')

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="group relative h-full w-full overflow-hidden rounded-lg border border-primary/10 bg-background p-0 transition-all hover:shadow-lg"
        >
          <div className="relative aspect-video w-full overflow-hidden">
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
              <div className="rounded-full bg-red-600 p-4 shadow-lg">
                <Play className="h-6 w-6 fill-white text-white" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-left text-sm font-semibold text-white">{title}</p>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-4xl overflow-auto sm:max-w-5xl">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src={embedUrl}
              title={title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

