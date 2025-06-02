
import { Product } from '@/types';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  size?: 'small' | 'medium';
}

const ProductCard = ({ product, size = 'medium' }: ProductCardProps) => {
  const navigate = useNavigate();

  const cardClass = size === 'small' 
    ? 'w-32 flex-shrink-0' 
    : 'w-40 flex-shrink-0';

  const imageClass = size === 'small' 
    ? 'h-32' 
    : 'h-40';

  return (
    <div 
      className={`${cardClass} bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow`}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className={`${imageClass} overflow-hidden`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-bold text-gray-900">₹{product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
              <span className="text-xs text-green-600 font-medium">{product.discount}% OFF</span>
            </>
          )}
        </div>
        <div className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full w-fit">
          {product.deliveryTime} delivery
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
