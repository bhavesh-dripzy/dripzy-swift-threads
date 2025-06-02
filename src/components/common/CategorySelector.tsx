
import { categories } from '@/data/mockData';

interface CategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategorySelector = ({ selectedCategory, onCategoryChange }: CategorySelectorProps) => {
  return (
    <div className="flex justify-between items-center px-4 py-6">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => onCategoryChange(category.id)}
        >
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 hover:border-orange-300 transition-colors">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className={`text-sm font-medium transition-colors ${
            selectedCategory === category.id ? 'text-orange-500' : 'text-gray-700'
          }`}>
            {category.name}
          </span>
          {selectedCategory === category.id && (
            <div className="w-8 h-0.5 bg-orange-500 rounded-full"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
