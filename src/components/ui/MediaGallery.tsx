"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface MediaGalleryProps {
  images: string[]
  title: string
}

export function MediaGallery({ images, title }: MediaGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") goNext()
    if (e.key === "ArrowLeft") goPrev()
  }

  if (images.length === 0) return null

  return (
    <>
      <div className="mt-12">
        <h3 className="font-[family-name:var(--font-display)] font-semibold text-t1 text-xl mb-6">
          Gallery
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin">
          {images.map((src, index) => (
            <button
              key={src}
              onClick={() => openLightbox(index)}
              className="relative flex-shrink-0 w-auto h-32 rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors group"
            >
              <Image
                src={src}
                alt={`${title} screenshot ${index + 1}`}
                width={160}
                height={128}
                className="h-full w-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-void/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-t2 hover:text-t1 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-4 p-2 text-t2 hover:text-t1 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex]}
                alt={`${title} screenshot ${currentIndex + 1}`}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain rounded-lg"
                priority
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-t2 text-sm font-[family-name:var(--font-mono)]">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-4 p-2 text-t2 hover:text-t1 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
