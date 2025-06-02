
import { bannerContent } from '@/data/mockData';

interface BannerCarouselProps {
  selectedCategory: string;
}

const BannerCarousel = ({ selectedCategory }: BannerCarouselProps) => {
  const banner = bannerContent[selectedCategory as keyof typeof bannerContent];

  if (!banner) return null;

  return (
    <div className="mx-4 mb-6 rounded-xl overflow-hidden shadow-lg">
      <div 
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-6">
          <h2 className="text-white text-2xl font-bold mb-2">{banner.title}</h2>
          <p className="text-white/90 text-sm">{banner.subtitle}</p>
          <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg font-medium w-fit hover:bg-gray-100 transition-colors">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
