import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
}

const ImageCarousel = ({ images, className }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length === 0) return null;

  return (
    <div className={cn("relative group", className)}>
      {/* Main Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-card">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-smooth"
        />
        
        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-smooth">
          <Button
            variant="secondary"
            size="sm"
            onClick={previousImage}
            className="bg-card/80 hover:bg-card shadow-warm"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={nextImage}
            className="bg-card/80 hover:bg-card shadow-warm"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Caption */}
        {images[currentIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white text-sm font-medium">
              {images[currentIndex].caption}
            </p>
          </div>
        )}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-smooth",
              currentIndex === index ? "bg-primary" : "bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;