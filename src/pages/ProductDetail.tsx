
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { products } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock additional images
  const productImages = product ? [
    product.image,
    product.image.replace('w=400', 'w=500'),
    product.image.replace('h=600', 'h=700'),
    product.image.replace('fit=crop', 'fit=cover'),
    product.image.replace('400', '450')
  ] : [];

  if (!product) {
    return (
      <div className="pt-16 pb-20 min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your preferred size before adding to cart",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Added to cart!",
      description: `${product.name} (Size: ${selectedSize}) added to your cart`,
    });
  };

  return (
    <div className="pt-16 pb-20 min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-2 rounded-full transition-colors ${
              isWishlisted ? 'text-red-500 bg-red-50' : 'hover:bg-gray-100'
            }`}
          >
            <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable Image Gallery */}
      <div className="relative">
        <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square min-w-full snap-center overflow-hidden"
            >
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Image indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {productImages.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/70"
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-sm text-gray-500">{product.brand}</span>
        </div>
        <h1 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h1>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
              <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                {product.discount}% OFF
              </span>
            </>
          )}
        </div>

        {/* Delivery Info */}
        <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg mb-6">
          <p className="text-sm font-medium">Get it in {product.deliveryTime}</p>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Select Size</h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-lg transition-colors ${
                  selectedSize === size
                    ? 'border-green-500 bg-green-50 text-green-500'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
