
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, CreditCard, Truck } from 'lucide-react';
import { mockUser } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedAddress, setSelectedAddress] = useState(mockUser.addresses[0].id);
  const [selectedPayment, setSelectedPayment] = useState('cod');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const mockCartTotal = 4498;
  const deliveryFee = 0;
  const totalAmount = mockCartTotal + deliveryFee;

  const handlePlaceOrder = async () => {
    setIsPlacingOrder(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsPlacingOrder(false);
      navigate('/order-success');
    }, 2000);
  };

  return (
    <div className="pt-16 pb-20 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center p-4 bg-white border-b">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full mr-3"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-bold">Checkout</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Delivery Address */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={20} className="text-orange-500" />
            <h2 className="text-lg font-semibold">Delivery Address</h2>
          </div>
          
          {mockUser.addresses.map((address) => (
            <div key={address.id} className="mb-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="address"
                  value={address.id}
                  checked={selectedAddress === address.id}
                  onChange={() => setSelectedAddress(address.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{address.type}</span>
                    {address.isDefault && (
                      <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">Default</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    {address.line1}
                    {address.line2 && `, ${address.line2}`}
                    <br />
                    {address.city}, {address.state} - {address.pincode}
                  </p>
                </div>
              </label>
            </div>
          ))}
          
          <button className="text-orange-500 text-sm font-medium mt-2">
            + Add New Address
          </button>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard size={20} className="text-orange-500" />
            <h2 className="text-lg font-semibold">Payment Method</h2>
          </div>
          
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={selectedPayment === 'cod'}
                onChange={() => setSelectedPayment('cod')}
              />
              <span>Cash on Delivery</span>
            </label>
            
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={selectedPayment === 'upi'}
                onChange={() => setSelectedPayment('upi')}
              />
              <span>UPI Payment</span>
            </label>
            
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={selectedPayment === 'card'}
                onChange={() => setSelectedPayment('card')}
              />
              <span>Credit/Debit Card</span>
            </label>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Truck size={20} className="text-green-600" />
            <span className="font-medium text-green-800">Express Delivery</span>
          </div>
          <p className="text-sm text-green-700">Your order will be delivered in 30 minutes</p>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{mockCartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="text-green-600">FREE</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{totalAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="fixed bottom-20 left-0 right-0 p-4 bg-white border-t">
        <button
          onClick={handlePlaceOrder}
          disabled={isPlacingOrder}
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50"
        >
          {isPlacingOrder ? 'Placing Order...' : `Place Order • ₹${totalAmount.toLocaleString()}`}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
