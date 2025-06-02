
import { useState, useEffect } from 'react';
import { bannerContent } from '@/data/mockData';

interface AutoBannerCarouselProps {
  selectedCategory: string;
}

const AutoBannerCarousel = ({ selectedCategory }: AutoBannerCarouselProps) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  // Mock multiple banners for each category
  const banners = [
    bannerContent[selectedCategory as keyof typeof bannerContent],
    bannerContent[selectedCategory as keyof typeof bannerContent],
    bannerContent[selectedCategory as keyof typeof bannerContent],
    bannerContent[selectedCategory as keyof typeof bannerContent],
  ].filter(Boolean);

  useEffect(() => {
    if (banners.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  if (!banners.length) return null;

  const banner = banners[currentBanner];

  return (
    <div className="mx-4 mb-6 rounded-xl overflow-hidden shadow-lg">
      <div 
        className="relative h-48 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-6">
          <h2 className="text-white text-2xl font-bold mb-2">{banner.title}</h2>
          <p className="text-white/90 text-sm">{banner.subtitle}</p>
          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg font-medium w-fit hover:bg-green-600 transition-colors">
            SHOP NOW
          </button>
        </div>
        
        {/* Indicators */}
        {banners.length > 1 && (
          <div className="absolute bottom-4 right-4 flex gap-2">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentBanner ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoBannerCarousel;
