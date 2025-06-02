
import { Product } from '@/types';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BannerProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  bannerImage: string;
}

const BannerProductSection = ({ title, subtitle, products, bannerImage }: BannerProductSectionProps) => {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      {/* Banner */}
      <div className="mx-4 mb-4 rounded-xl overflow-hidden shadow-lg">
        <div 
          className="relative h-48 bg-gradient-to-r from-pink-100 via-purple-50 to-blue-100"
          style={{ 
            backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7)), url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-between px-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
              <p className="text-gray-700 text-lg mb-4">{subtitle}</p>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="flex-1 flex justify-end">
              <img
                src={bannerImage}
                alt={title}
                className="w-48 h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="flex gap-4 overflow-x-auto px-4 scrollbar-hide">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-40 flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow relative"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            {/* Discount Badge */}
            {product.discount && (
              <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-medium z-10">
                {product.discount}% OFF
              </div>
            )}
            
            <div className="h-40 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3">
              <p className="text-xs text-gray-500 mb-1 font-medium">{product.brand}</p>
              <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerProductSection;
