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
  fullWidth?: boolean;
  height?: 'sm' | 'md' | 'lg' | 'xl';
}

const ImageCarousel = ({ images, className, fullWidth = false, height = 'md' }: ImageCarouselProps) => {
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

  const heightClasses = {
    sm: 'h-64',
    md: 'h-96',
    lg: 'h-[32rem]',
    xl: 'h-[40rem]'
  };

  const aspectClass = fullWidth ? heightClasses[height] : 'aspect-video';
  const roundingClass = fullWidth ? '' : 'rounded-lg';

  return (
    <div className={cn("relative group", className)}>
      {/* Main Image */}
      <div className={cn("relative w-full overflow-hidden shadow-card", aspectClass, roundingClass)}>
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
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <div className={cn("text-white", fullWidth ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : "")}>
              <p className={cn("font-medium", fullWidth ? "text-lg md:text-xl" : "text-sm")}>
                {images[currentIndex].caption}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Dots Indicator */}
      <div className={cn("flex justify-center space-x-2", fullWidth ? "mt-6" : "mt-4")}>
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