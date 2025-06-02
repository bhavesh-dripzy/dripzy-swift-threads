
import { Product } from '@/types';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

const ProductSection = ({ title, products, viewAllLink }: ProductSectionProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        {viewAllLink && (
          <button className="flex items-center gap-1 text-green-500 text-sm font-medium hover:text-green-600 transition-colors">
            View All
            <ArrowRight size={14} />
          </button>
        )}
      </div>
      <div className="flex gap-4 overflow-x-auto px-4 scrollbar-hide">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
