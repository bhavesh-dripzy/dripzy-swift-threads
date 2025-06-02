
import { useState } from 'react';
import { categories } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('women');
  const navigate = useNavigate();

  const currentCategory = categories.find(c => c.id === selectedCategory);

  return (
    <div className="pt-16 pb-20 min-h-screen bg-gray-50">
      {/* Category Tabs */}
      <div className="bg-white border-b">
        <div className="flex overflow-x-auto px-4 py-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center gap-2 cursor-pointer flex-shrink-0"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`text-sm font-medium ${
                selectedCategory === category.id ? 'text-green-500' : 'text-gray-700'
              }`}>
                {category.name}
              </span>
              {selectedCategory === category.id && (
                <div className="w-6 h-0.5 bg-green-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="mx-4 my-6 rounded-xl overflow-hidden shadow-lg">
        <div 
          className="relative h-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentCategory?.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center px-6">
            <h2 className="text-white text-xl font-bold">
              {currentCategory?.name} Collection
            </h2>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/3 bg-white mr-4 ml-4 rounded-lg shadow-sm">
          <div className="p-4">
            <h3 className="font-bold mb-4">Categories</h3>
            {currentCategory?.subcategories.map((subcategory) => (
              <div key={subcategory.id} className="mb-3">
                <div className="flex items-center gap-2 py-2 px-3 hover:bg-gray-50 rounded cursor-pointer">
                  <span className="text-lg">{subcategory.icon}</span>
                  <span className="text-sm font-medium">{subcategory.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Types Grid */}
        <div className="flex-1 mr-4">
          {currentCategory?.subcategories.map((subcategory) => (
            <div key={subcategory.id} className="mb-6">
              <h3 className="text-lg font-bold mb-4">{subcategory.name}</h3>
              <div className="grid grid-cols-3 gap-4">
                {subcategory.types.map((type) => (
                  <div
                    key={type.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => navigate(`/products/${type.id}`)}
                  >
                    <div className="h-32 overflow-hidden">
                      <img
                        src={type.image}
                        alt={type.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="text-sm font-medium mb-1">{type.name}</h4>
                      <p className="text-xs text-gray-500">{type.count} items</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
