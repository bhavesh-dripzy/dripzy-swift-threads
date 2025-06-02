
import { useState } from 'react';
import { Search } from 'lucide-react';

const Brands = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const brands = [
    { 
      name: 'Zara', 
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop',
      description: 'Spanish fast fashion retailer',
      categories: ['Women', 'Men', 'Kids']
    },
    { 
      name: 'H&M', 
      logo: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=100&h=100&fit=crop',
      description: 'Swedish multinational clothing-retail company',
      categories: ['Women', 'Men', 'Kids', 'Home']
    },
    { 
      name: 'Jockey', 
      logo: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=100&h=100&fit=crop',
      description: 'American manufacturer and retailer of underwear',
      categories: ['Innerwear', 'Activewear']
    },
    { 
      name: 'Fab India', 
      logo: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=100&h=100&fit=crop',
      description: 'Indian ethnic wear and home products',
      categories: ['Ethnic Wear', 'Home Decor']
    },
    { 
      name: 'Nike', 
      logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop',
      description: 'American athletic footwear and apparel',
      categories: ['Footwear', 'Sportswear']
    },
    { 
      name: 'Adidas', 
      logo: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=100&h=100&fit=crop',
      description: 'German athletic apparel and footwear',
      categories: ['Footwear', 'Sportswear']
    }
  ];

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-16 pb-20 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="px-4 py-6 bg-white border-b">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Top Brands</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search brands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Brands Grid */}
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBrands.map((brand, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{brand.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {brand.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
