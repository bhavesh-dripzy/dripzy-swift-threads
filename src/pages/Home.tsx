
import { useState } from 'react';
import { Search } from 'lucide-react';
import CategorySelector from '@/components/common/CategorySelector';
import AutoBannerCarousel from '@/components/common/AutoBannerCarousel';
import QuickPicksGrid from '@/components/product/QuickPicksGrid';
import EthnicCollectionSection from '@/components/product/EthnicCollectionSection';
import BannerProductSection from '@/components/product/BannerProductSection';
import ProductSection from '@/components/product/ProductSection';
import { products } from '@/data/mockData';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('women');

  const trendingProducts = products.filter(p => p.discount);
  const newArrivals = products.slice(2, 6);
  const under999 = products.filter(p => p.price < 1000);
  const topsProducts = products.slice(0, 8);

  return (
    <div className="pt-16 pb-20 min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="px-4 py-4 bg-white border-b">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="I am looking for..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Category Selector */}
      <div className="bg-white">
        <CategorySelector 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* Auto Banner */}
      <AutoBannerCarousel selectedCategory={selectedCategory} />

      {/* Quick Picks Grid */}
      <QuickPicksGrid selectedCategory={selectedCategory} />

      {/* Ethnic Collection Section (Image 1 Style) - Show only for women category */}
      {selectedCategory === 'women' && <EthnicCollectionSection />}

      {/* New Arrivals with Banner (Image 2 Style) */}
      <BannerProductSection
        title="Tops"
        subtitle="Everyday Slay, Every Way."
        products={topsProducts}
        bannerImage="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=300&fit=crop"
      />

      {/* Under ₹999 with Banner */}
      <BannerProductSection
        title="Under ₹999"
        subtitle="Budget-Friendly Fashion Finds"
        products={under999}
        bannerImage="https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=300&fit=crop"
      />

      {/* Regular Product Sections */}
      <ProductSection
        title="Trending Now"
        products={trendingProducts}
        viewAllLink="/trending"
      />

      {/* Brands Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 px-4 mb-4">Top Brands</h2>
        <div className="flex gap-4 overflow-x-auto px-4 scrollbar-hide">
          {['Zara', 'H&M', 'Jockey'].map((brand) => (
            <div key={brand} className="flex-shrink-0 w-24 h-24 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow">
              <span className="text-sm font-bold text-gray-700">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
