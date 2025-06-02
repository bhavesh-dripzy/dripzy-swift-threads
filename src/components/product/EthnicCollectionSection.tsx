
import { ArrowRight } from 'lucide-react';

const EthnicCollectionSection = () => {
  const brands = [
    { name: 'H&M', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=250&fit=crop' },
    { name: 'Zara', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=200&h=250&fit=crop' },
    { name: 'Fab India', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&h=250&fit=crop' }
  ];

  return (
    <div className="mb-8 mx-4">
      <div className="bg-white rounded-xl p-6 shadow-sm relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 right-4 text-6xl">🕉️</div>
          <div className="absolute bottom-8 left-8 text-4xl">✨</div>
        </div>
        
        {/* Discount Tag */}
        <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
          UPTO 70% OFF
        </div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>
              Ethnic Collection
            </h2>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors shadow-md">
              Shop Now
            </button>
          </div>
          
          {/* Models Image */}
          <div className="flex justify-end mb-6">
            <img
              src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop"
              alt="Ethnic models"
              className="w-64 h-48 object-cover rounded-lg"
            />
          </div>
          
          {/* Brand Cards */}
          <div className="grid grid-cols-3 gap-4">
            {brands.map((brand, index) => (
              <div key={index} className="bg-gradient-to-b from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200 relative overflow-hidden">
                {/* Arch Design */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-amber-200 to-transparent rounded-b-full opacity-30"></div>
                
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-2">{brand.name}</h3>
                  <img
                    src={brand.image}
                    alt={`${brand.name} ethnic wear`}
                    className="w-full h-20 object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthnicCollectionSection;
