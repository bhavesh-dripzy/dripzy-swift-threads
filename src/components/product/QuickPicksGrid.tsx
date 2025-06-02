
import { useNavigate } from 'react-router-dom';

interface QuickPicksGridProps {
  selectedCategory: string;
}

const QuickPicksGrid = ({ selectedCategory }: QuickPicksGridProps) => {
  const navigate = useNavigate();

  // Quick picks data based on category with labels matching the image
  const quickPicksData = {
    women: [
      { id: 'top-wear', label: 'Top Wear', image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=600&fit=crop' },
      { id: 'bottom-wear', label: 'Bottom Wear', image: 'https://images.unsplash.com/photo-1566479179817-c7cc1c3b4e32?w=400&h=600&fit=crop' },
      { id: 'dresses', label: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop' },
      { id: 'ethnic', label: 'Ethnic & Fusion wear', image: 'https://images.unsplash.com/photo-1583391265524-00cd3e9d2843?w=400&h=600&fit=crop' },
      { id: 'accessories', label: 'Accessories & Jewellery', image: 'https://images.unsplash.com/photo-1630019852942-f89202989578?w=400&h=600&fit=crop' },
      { id: 'footwear', label: 'Footwear', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop' },
      { id: 'athleisure', label: 'Athleisure', image: 'https://images.unsplash.com/photo-1506629905607-d3e42536e189?w=400&h=600&fit=crop' },
      { id: 'sleepwear', label: 'Co-ords & Sleepwear', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop' },
    ],
    men: [
      { id: 'shirts', label: 'Shirts', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=600&fit=crop' },
      { id: 'tshirts', label: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop' },
      { id: 'jeans', label: 'Jeans', image: 'https://images.unsplash.com/photo-1542272454315-7ad9f95f2b10?w=400&h=600&fit=crop' },
      { id: 'suits', label: 'Suits', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop' },
      { id: 'shoes', label: 'Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop' },
      { id: 'accessories', label: 'Accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop' },
      { id: 'sportswear', label: 'Sportswear', image: 'https://images.unsplash.com/photo-1506629905607-d3e42536e189?w=400&h=600&fit=crop' },
      { id: 'casual', label: 'Casual Wear', image: 'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?w=400&h=600&fit=crop' },
    ],
    footwear: [
      { id: 'sneakers', label: 'Sneakers', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop' },
      { id: 'heels', label: 'Heels', image: 'https://images.unsplash.com/photo-1566479179817-c7cc1c3b4e32?w=400&h=600&fit=crop' },
      { id: 'flats', label: 'Flats', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=600&fit=crop' },
      { id: 'boots', label: 'Boots', image: 'https://images.unsplash.com/photo-1580932746174-5ac4d04fce5e?w=400&h=600&fit=crop' },
      { id: 'sandals', label: 'Sandals', image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&h=600&fit=crop' },
      { id: 'formal', label: 'Formal Shoes', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=600&fit=crop' },
      { id: 'sports', label: 'Sports Shoes', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=600&fit=crop' },
      { id: 'slippers', label: 'Slippers', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=600&fit=crop' },
    ],
    accessories: [
      { id: 'bags', label: 'Bags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop' },
      { id: 'jewelry', label: 'Jewelry', image: 'https://images.unsplash.com/photo-1630019852942-f89202989578?w=400&h=600&fit=crop' },
      { id: 'watches', label: 'Watches', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop' },
      { id: 'sunglasses', label: 'Sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=600&fit=crop' },
      { id: 'belts', label: 'Belts', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop' },
      { id: 'hats', label: 'Hats', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=600&fit=crop' },
      { id: 'scarves', label: 'Scarves', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=600&fit=crop' },
      { id: 'wallets', label: 'Wallets', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=600&fit=crop' },
    ],
  };

  const currentQuickPicks = quickPicksData[selectedCategory as keyof typeof quickPicksData] || quickPicksData.women;

  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-gray-900 px-4 mb-4">QUICK PICKS</h2>
      <div className="grid grid-cols-4 gap-3 px-4">
        {currentQuickPicks.map((pick) => (
          <div
            key={pick.id}
            className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform relative"
            onClick={() => navigate(`/products/${pick.id}`)}
            style={{ backgroundColor: '#D4A574' }}
          >
            <img
              src={pick.image}
              alt={pick.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs font-medium text-center py-2">
              {pick.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickPicksGrid;
