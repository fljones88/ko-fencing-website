"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Wood privacy fence installation",
    category: "Residential",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Vinyl fence with decorative posts",
    category: "Residential",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Commercial security fencing",
    category: "Commercial",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Chain link fence for a backyard",
    category: "Residential",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Ornamental aluminum fence",
    category: "Residential",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Industrial perimeter fencing",
    category: "Commercial",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    } else {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
              <p className="font-medium text-center">{image.alt}</p>
              <span className="text-sm mt-2 px-3 py-1 bg-white/20 rounded">{image.category}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
            <div className="relative">
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
            <div className="text-white text-center mt-4">
              <p className="font-medium">{galleryImages[selectedImage].alt}</p>
              <p className="text-sm text-white/70">{galleryImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

