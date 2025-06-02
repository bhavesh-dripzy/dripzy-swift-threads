
import { MapPin, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartSidebar from '../cart/CartSidebar';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left - Location */}
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} />
            <span className="text-sm font-medium">Delivering in Delhi NCR</span>
          </div>

          {/* Center - Brand */}
          <div 
            className="text-2xl font-bold text-black cursor-pointer hover:scale-105 transition-transform"
            onClick={() => navigate('/')}
          >
            Dripzy
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
