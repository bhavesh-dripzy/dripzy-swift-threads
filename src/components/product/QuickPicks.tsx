
import { Product } from '@/types';
import { useNavigate } from 'react-router-dom';

interface QuickPicksProps {
  products: Product[];
}

const QuickPicks = ({ products }: QuickPicksProps) => {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-gray-900 px-4 mb-4">Quick Picks</h2>
      <div className="grid grid-cols-4 gap-2 px-4">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickPicks;
