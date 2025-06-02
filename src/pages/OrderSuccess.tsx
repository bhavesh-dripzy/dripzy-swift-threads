
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-16 pb-20 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 text-center">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="mb-6">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
            <p className="text-gray-600">Your order #ORD123456 has been confirmed</p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <p className="text-green-800 font-medium">
              🚚 Your order will be delivered in 30 minutes!
            </p>
            <p className="text-green-700 text-sm mt-1">
              Track your order for real-time updates
            </p>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={() => navigate('/orders')}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Track Order
            </button>
            
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Home size={20} />
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
