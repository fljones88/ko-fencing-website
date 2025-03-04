import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  rating: number
}

export function TestimonialCard({ name, location, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
            />
          ))}
        </div>
        <blockquote className="flex-1 mb-4 italic text-muted-foreground">"{quote}"</blockquote>
        <div className="mt-auto">
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">{location}</div>
        </div>
      </CardContent>
    </Card>
  )
}

