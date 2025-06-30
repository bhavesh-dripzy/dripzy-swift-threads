
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { useFilter } from '../contexts/FilterContext';

// Updated filter options based on your category structure
const FILTER_OPTIONS = {
  gender: [
    { tag: "Men's Wear", display: "Men" },
    { tag: "Women's Wear", display: "Women" }
  ],
  category: [
    { tag: "Shirts", display: "Shirts" },
    { tag: "T-Shirts", display: "T-Shirts" },
    { tag: "Jeans", display: "Jeans" },
    { tag: "Trousers", display: "Trousers" },
    { tag: "Shorts", display: "Shorts" },
    { tag: "Track Pants", display: "Track Pants" },
    { tag: "Jackets", display: "Jackets" },
    { tag: "Sweatshirts", display: "Sweatshirts" },
    { tag: "Sweaters", display: "Sweaters" },
    { tag: "Dresses", display: "Dresses" },
    { tag: "Tops", display: "Tops" },
    { tag: "Co-ords", display: "Co-ords" },
    { tag: "Skirts & Shorts", display: "Skirts & Shorts" },
    { tag: "Jumpsuits", display: "Jumpsuits" },
    { tag: "Bras", display: "Bras" },
    { tag: "Briefs", display: "Briefs" },
    { tag: "Lounge Pants", display: "Lounge Pants" },
    { tag: "Shapewear", display: "Shapewear" },
    { tag: "Crop Tops", display: "Crop Tops" },
    { tag: "Tank Tops", display: "Tank Tops" },
    { tag: "Mini Skirts", display: "Mini Skirts" },
    { tag: "Cargos", display: "Cargos" }
  ],
  style: [
    { tag: "Casual Wear", display: "Casual" },
    { tag: "Sports Wear", display: "Sports" },
    { tag: "Gen-Z Fashion", display: "Gen-Z" },
    { tag: "Western Wear", display: "Western" },
    { tag: "Lingerie & Loungewear", display: "Lingerie & Loungewear" },
    { tag: "Oversized Tees", display: "Oversized Tees" },
    { tag: "Polo T-Shirts", display: "Polo T-Shirts" },
    { tag: "Oversized Shirts", display: "Oversized Shirts" },
    { tag: "Half Sleeve Shirts", display: "Half Sleeve Shirts" },
    { tag: "Printed Shirts", display: "Printed Shirts" },
    { tag: "Stripes & Checks", display: "Stripes & Checks" },
    { tag: "Casual Trousers", display: "Casual Trousers" },
    { tag: "Casual Shorts", display: "Casual Shorts" },
    { tag: "Printed Dresses", display: "Printed Dresses" },
    { tag: "Flared Dresses", display: "Flared Dresses" },
    { tag: "Bodycon Dresses", display: "Bodycon Dresses" },
    { tag: "Maxi Dresses", display: "Maxi Dresses" },
    { tag: "Floral Tops", display: "Floral Tops" },
    { tag: "Printed Tees", display: "Printed Tees" },
    { tag: "Crop Tees", display: "Crop Tees" },
    { tag: "Slit Skirts", display: "Slit Skirts" },
    { tag: "Relaxed Fit Shorts", display: "Relaxed Fit Shorts" },
    { tag: "Western Avenue", display: "Western Avenue" }
  ]
};

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, onApply }) => {
  const { filterState, setFilters, clearFilters } = useFilter();
  const [localTags, setLocalTags] = useState<string[]>([]);

  console.log('FilterModal - Current filter state:', filterState);
  console.log('FilterModal - Local tags:', localTags);

  // Sync local state ONLY when modal opens
  useEffect(() => {
    if (isOpen) {
      console.log('FilterModal - Modal opened, syncing local tags with:', filterState.selectedTags);
      setLocalTags([...filterState.selectedTags]);
    }
  }, [isOpen, filterState.selectedTags]); // Keep filterState.selectedTags to sync properly

  const toggleTag = (tag: string) => {
    console.log('FilterModal - Toggling tag:', tag);
    setLocalTags(prev => {
      const newTags = prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag];
      console.log('FilterModal - New local tags:', newTags);
      return newTags;
    });
  };

  const handleApply = () => {
    console.log('FilterModal - Applying filters:', localTags);
    setFilters(localTags); // Update global context
    
    // Small delay to ensure state is updated before closing
    setTimeout(() => {
      onApply(); // Trigger refetch
      onClose(); // Close modal
    }, 100);
  };

  const handleClearAll = () => {
    console.log('FilterModal - Clearing all filters');
    setLocalTags([]);
    clearFilters();
  };

  const handleRemoveTag = (tag: string) => {
    console.log('FilterModal - Removing tag:', tag);
    setLocalTags(prev => prev.filter(t => t !== tag));
  };

  const renderFilterSection = (title: string, options: { tag: string; display: string }[]) => (
    <div className="mb-6">
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <div className="space-y-3">
        {options.map(({ tag, display }) => {
          const isChecked = localTags.includes(tag);
          console.log(`FilterModal - Checkbox ${tag}: ${isChecked}`);
          return (
            <div key={tag} className="flex items-center space-x-3">
              <input
                type="checkbox"
                id={`checkbox-${tag}`}
                checked={isChecked}
                onChange={(e) => {
                  console.log(`FilterModal - Checkbox changed for ${tag}:`, e.target.checked);
                  toggleTag(tag);
                }}
                className="accent-orange-500 w-4 h-4"
              />
              <Label
                htmlFor={`checkbox-${tag}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
                onClick={() => toggleTag(tag)}
              >
                {display}
              </Label>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Filters</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              className="text-orange-500 hover:text-orange-600"
            >
              Clear All
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto space-y-4">
          {/* Selected Filters Summary */}
          {localTags.length > 0 && (
            <div className="pb-4 border-b">
              <h3 className="font-semibold mb-2">Selected Filters</h3>
              <div className="flex flex-wrap gap-2">
                {localTags.map(tag => {
                  const allOptions = [
                    ...FILTER_OPTIONS.gender,
                    ...FILTER_OPTIONS.category,
                    ...FILTER_OPTIONS.style
                  ];
                  const option = allOptions.find(opt => opt.tag === tag);
                  const displayName = option?.display || tag;
                  
                  return (
                    <Badge
                      key={tag}
                      variant="default"
                      className="bg-orange-500 text-white hover:bg-orange-600"
                    >
                      {displayName}
                      <X 
                        className="ml-1 h-3 w-3 cursor-pointer hover:bg-orange-600 rounded-full" 
                        onClick={() => handleRemoveTag(tag)}
                      />
                    </Badge>
                  );
                })}
              </div>
            </div>
          )}

          {/* Filter Categories */}
          {renderFilterSection("Gender", FILTER_OPTIONS.gender)}
          {renderFilterSection("Category", FILTER_OPTIONS.category)}
          {renderFilterSection("Style", FILTER_OPTIONS.style)}
        </div>

        {/* Fixed Apply Button at Bottom */}
        <div className="flex gap-3 pt-4 border-t mt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleApply}
            className="flex-1 bg-orange-500 hover:bg-orange-600"
          >
            Apply Filters
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
