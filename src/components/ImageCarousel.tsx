import React, { useState, useEffect, useRef } from 'react';
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

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
          className="w-full h-full object-contain transition-smooth bg-white/20"
        />
        
  {/* Navigation Buttons removed for auto-slide */}

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

  {/* Dots Indicator removed for clean look */}
    </div>
  );
};

export default ImageCarousel;