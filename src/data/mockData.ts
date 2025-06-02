
import { Product, Category, User, Order } from '@/types';

export const categories: Category[] = [
  {
    id: 'women',
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face',
    subcategories: [
      {
        id: 'topwear',
        name: 'Topwear',
        icon: '👕',
        types: [
          { id: 't-shirts', name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop', count: 150 },
          { id: 'shirts', name: 'Shirts', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop', count: 89 },
          { id: 'tops', name: 'Tops', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=300&h=400&fit=crop', count: 120 }
        ]
      },
      {
        id: 'bottomwear',
        name: 'Bottomwear',
        icon: '👖',
        types: [
          { id: 'jeans', name: 'Jeans', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop', count: 200 },
          { id: 'skirts', name: 'Skirts', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d76?w=300&h=400&fit=crop', count: 75 }
        ]
      },
      {
        id: 'dresses',
        name: 'Dresses',
        icon: '👗',
        types: [
          { id: 'casual-dresses', name: 'Casual Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop', count: 95 },
          { id: 'party-dresses', name: 'Party Dresses', image: 'https://images.unsplash.com/photo-1566479179817-c0acb28c4ec5?w=300&h=400&fit=crop', count: 60 }
        ]
      }
    ]
  },
  {
    id: 'men',
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face',
    subcategories: [
      {
        id: 'topwear',
        name: 'Topwear',
        icon: '👔',
        types: [
          { id: 't-shirts', name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop', count: 180 },
          { id: 'shirts', name: 'Shirts', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop', count: 120 },
          { id: 'hoodies', name: 'Hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a9909d96c38?w=300&h=400&fit=crop', count: 90 }
        ]
      },
      {
        id: 'bottomwear',
        name: 'Bottomwear',
        icon: '👖',
        types: [
          { id: 'jeans', name: 'Jeans', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop', count: 220 },
          { id: 'trousers', name: 'Trousers', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop', count: 85 }
        ]
      }
    ]
  },
  {
    id: 'footwear',
    name: 'Footwear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    subcategories: [
      {
        id: 'casual',
        name: 'Casual',
        icon: '👟',
        types: [
          { id: 'sneakers', name: 'Sneakers', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop', count: 150 },
          { id: 'loafers', name: 'Loafers', image: 'https://images.unsplash.com/photo-1573913636631-dc4fc5cd8293?w=300&h=400&fit=crop', count: 80 }
        ]
      }
    ]
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    subcategories: [
      {
        id: 'eyewear',
        name: 'Eyewear',
        icon: '🕶️',
        types: [
          { id: 'sunglasses', name: 'Sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=400&fit=crop', count: 120 },
          { id: 'glasses', name: 'Glasses', image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300&h=400&fit=crop', count: 95 }
        ]
      }
    ]
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Sneakers',
    brand: 'Zara',
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop',
    category: 'footwear',
    subcategory: 'sneakers',
    sizes: ['6', '7', '8', '9', '10'],
    description: 'Comfortable white sneakers perfect for everyday wear',
    deliveryTime: '30 min'
  },
  {
    id: '2',
    name: 'Denim Jacket',
    brand: 'H&M',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop',
    category: 'women',
    subcategory: 'topwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Classic denim jacket for a timeless look',
    deliveryTime: '30 min'
  },
  {
    id: '3',
    name: 'Black Formal Shirt',
    brand: 'Jockey',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop',
    category: 'men',
    subcategory: 'topwear',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium cotton formal shirt for office wear',
    deliveryTime: '30 min'
  },
  {
    id: '4',
    name: 'Aviator Sunglasses',
    brand: 'Zara',
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=600&fit=crop',
    category: 'accessories',
    subcategory: 'eyewear',
    sizes: ['One Size'],
    description: 'Classic aviator sunglasses with UV protection',
    deliveryTime: '30 min'
  },
  {
    id: '5',
    name: 'Summer Floral Dress',
    brand: 'H&M',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop',
    category: 'women',
    subcategory: 'dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Beautiful floral dress perfect for summer',
    deliveryTime: '30 min'
  },
  {
    id: '6',
    name: 'Casual Gray Hoodie',
    brand: 'Jockey',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1556821840-3a9909d96c38?w=400&h=600&fit=crop',
    category: 'men',
    subcategory: 'topwear',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Comfortable cotton hoodie for casual wear',
    deliveryTime: '30 min'
  },
  {
    id: '7',
    name: 'Blue Skinny Jeans',
    brand: 'Zara',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=600&fit=crop',
    category: 'women',
    subcategory: 'bottomwear',
    sizes: ['26', '28', '30', '32', '34'],
    description: 'Trendy blue skinny jeans with stretch fabric',
    deliveryTime: '30 min'
  },
  {
    id: '8',
    name: 'Brown Leather Loafers',
    brand: 'H&M',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1573913636631-dc4fc5cd8293?w=400&h=600&fit=crop',
    category: 'footwear',
    subcategory: 'casual',
    sizes: ['6', '7', '8', '9', '10', '11'],
    description: 'Premium leather loafers for smart casual look',
    deliveryTime: '30 min'
  }
];

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+91 9876543210',
  addresses: [
    {
      id: '1',
      type: 'Home',
      line1: '123 Green Park',
      line2: 'Near Metro Station',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '110016',
      isDefault: true
    },
    {
      id: '2',
      type: 'Office',
      line1: '456 Connaught Place',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '110001',
      isDefault: false
    }
  ]
};

export const mockOrders: Order[] = [
  {
    id: 'ORD001',
    date: '2024-06-01',
    items: [
      {
        product: products[0],
        size: '8',
        quantity: 1
      }
    ],
    total: 2999,
    status: 'Delivered',
    deliveryTime: '28 min'
  },
  {
    id: 'ORD002',
    date: '2024-05-28',
    items: [
      {
        product: products[1],
        size: 'M',
        quantity: 1
      },
      {
        product: products[3],
        size: 'One Size',
        quantity: 1
      }
    ],
    total: 2898,
    status: 'Delivered',
    deliveryTime: '25 min'
  }
];

export const bannerContent = {
  women: {
    title: 'YOUR NEXT STATEMENT FIT',
    subtitle: 'Trending styles delivered in 30 minutes',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop'
  },
  men: {
    title: 'ELEVATE YOUR STYLE',
    subtitle: 'Premium menswear at your doorstep',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop'
  },
  footwear: {
    title: 'STEP INTO COMFORT',
    subtitle: 'Latest footwear trends delivered fast',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=400&fit=crop'
  },
  accessories: {
    title: 'COMPLETE YOUR LOOK',
    subtitle: 'Accessories that make a difference',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=400&fit=crop'
  }
};
