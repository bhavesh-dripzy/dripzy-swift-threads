
import { ArrowRight, User, MapPin, CreditCard, HelpCircle, LogOut, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockUser, mockOrders } from '@/data/mockData';

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Package, label: 'My Orders', path: '/orders', count: mockOrders.length },
    { icon: MapPin, label: 'Addresses', path: '/addresses', count: mockUser.addresses.length },
    { icon: CreditCard, label: 'Payment Methods', path: '/payment-methods' },
    { icon: HelpCircle, label: 'Help & Support', path: '/support' },
  ];

  return (
    <div className="pt-16 pb-20 min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="bg-white p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
            <User size={32} className="text-orange-500" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">{mockUser.name}</h1>
            <p className="text-gray-600">{mockUser.email}</p>
            <p className="text-gray-600">{mockUser.phone}</p>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white mx-4 rounded-lg p-4 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <button 
            onClick={() => navigate('/orders')}
            className="text-orange-500 text-sm font-medium"
          >
            View All
          </button>
        </div>
        
        {mockOrders.slice(0, 2).map((order) => (
          <div key={order.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
            <div>
              <p className="font-medium">Order #{order.id}</p>
              <p className="text-sm text-gray-600">{order.date} • ₹{order.total}</p>
              <span className={`text-xs px-2 py-1 rounded ${
                order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
              }`}>
                {order.status}
              </span>
            </div>
            <ArrowRight size={16} className="text-gray-400" />
          </div>
        ))}
      </div>

      {/* Menu Items */}
      <div className="bg-white mx-4 rounded-lg shadow-sm">
        {menuItems.map((item, index) => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
              index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} className="text-gray-600" />
              <span className="font-medium">{item.label}</span>
              {item.count && (
                <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                  {item.count}
                </span>
              )}
            </div>
            <ArrowRight size={16} className="text-gray-400" />
          </button>
        ))}
      </div>

      {/* Logout */}
      <div className="mx-4 mt-6">
        <button className="w-full flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm text-red-600 hover:bg-red-50 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
