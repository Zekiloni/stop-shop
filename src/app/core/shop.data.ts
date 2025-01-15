import {Product} from './shop.model';

export const products: Product[] = [
  {
    id: '0041',
    name: 'T-Shirt',
    price: 19.99,
    description: 'A comfortable cotton t-shirt',
    colors: ['red', 'blue', 'green'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Clothing',
    inStock: true,
    images: ['./images/products/1.png', 'tshirt2.jpg'],
    rating: 4.5,
    reviews: [
      {
        username: 'john_doe',
        comment: 'Great quality!',
        rating: 5,
        date: new Date('2023-01-15')
      }
    ],
    tags: ['casual', 'cotton'],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-10')
  },
  {
    id: '63432',
    name: 'Jeans',
    price: 49.99,
    description: 'Stylish denim jeans',
    colors: ['blue', 'black'],
    sizes: ['32', '34', '36', '38'],
    category: 'Clothing',
    inStock: true,
    images: ['./images/products/1.png', 'jeans2.jpg'],
    rating: 4.0,
    reviews: [
      {
        username: 'jane_doe',
        comment: 'Very comfortable',
        rating: 4,
        date: new Date('2023-02-20')
      }
    ],
    tags: ['denim', 'casual'],
    createdAt: new Date('2023-02-01'),
    updatedAt: new Date('2023-02-15')
  },
  {
    id: '346343',
    name: 'Sneakers',
    price: 59.99,
    description: 'Comfortable running sneakers',
    colors: ['white', 'black'],
    sizes: ['8', '9', '10', '11'],
    category: 'Footwear',
    inStock: true,
    images: ['./images/products/1.png', 'sneakers2.jpg'],
    rating: 4.8,
    reviews: [
      {
        username: 'runner123',
        comment: 'Perfect for running!',
        rating: 5,
        date: new Date('2023-03-10')
      }
    ],
    tags: ['running', 'sport'],
    createdAt: new Date('2023-03-01'),
    updatedAt: new Date('2023-03-05')
  },
  {
    id: '7686574',
    name: 'Jacket',
    price: 89.99,
    description: 'Warm winter jacket',
    colors: ['black', 'grey'],
    sizes: ['M', 'L', 'XL'],
    category: 'Clothing',
    inStock: false,
    images: ['./images/products/1.png', 'jacket2.jpg'],
    rating: 4.2,
    reviews: [
      {
        username: 'winter_lover',
        comment: 'Keeps me warm!',
        rating: 4,
        date: new Date('2023-04-12')
      }
    ],
    tags: ['winter', 'warm'],
    createdAt: new Date('2023-04-01'),
    updatedAt: new Date('2023-04-10')
  },
  {
    id: '5478456345',
    name: 'Watch',
    price: 199.99,
    description: 'Elegant wrist watch',
    colors: ['silver', 'gold'],
    category: 'Accessories',
    inStock: true,
    images: ['./images/products/1.png', 'watch2.jpg'],
    rating: 4.9,
    reviews: [
      {
        username: 'time_keeper',
        comment: 'Looks great!',
        rating: 5,
        date: new Date('2023-05-15')
      }
    ],
    tags: ['elegant', 'luxury'],
    createdAt: new Date('2023-05-01'),
    updatedAt: new Date('2023-05-10')
  },
  {
    id: '6765756',
    name: 'Backpack',
    price: 39.99,
    description: 'Durable travel backpack',
    colors: ['black', 'blue'],
    category: 'Accessories',
    inStock: true,
    images: ['./images/products/1.png', 'backpack2.jpg'],
    rating: 4.3,
    reviews: [
      {
        username: 'traveler',
        comment: 'Very spacious',
        rating: 4,
        date: new Date('2023-06-20')
      }
    ],
    tags: ['travel', 'durable'],
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2023-06-15')
  },
  {
    id: '435347',
    name: 'Sunglasses',
    price: 29.99,
    description: 'Stylish sunglasses',
    colors: ['black', 'brown'],
    category: 'Accessories',
    inStock: true,
    images: ['./images/products/1.png', 'sunglasses2.jpg'],
    rating: 4.7,
    reviews: [
      {
        username: 'sunny_day',
        comment: 'Very stylish!',
        rating: 5,
        date: new Date('2023-07-10')
      }
    ],
    tags: ['summer', 'fashion'],
    createdAt: new Date('2023-07-01'),
    updatedAt: new Date('2023-07-05')
  },
  {
    id: '6547488',
    name: 'Hat',
    price: 14.99,
    description: 'Casual baseball cap',
    colors: ['red', 'blue', 'black'],
    category: 'Accessories',
    inStock: true,
    images: ['./images/products/1.png', 'hat2.jpg'],
    rating: 4.1,
    reviews: [
      {
        username: 'cap_fan',
        comment: 'Fits well',
        rating: 4,
        date: new Date('2023-08-15')
      }
    ],
    tags: ['casual', 'sport'],
    createdAt: new Date('2023-08-01'),
    updatedAt: new Date('2023-08-10')
  },
  {
    id: '345319',
    name: 'Laptop Bag',
    price: 49.99,
    description: 'Protective laptop bag',
    colors: ['black', 'grey'],
    category: 'Accessories',
    inStock: true,
    images: ['./images/products/1.png', 'laptop_bag2.jpg'],
    rating: 4.6,
    reviews: [
      {
        username: 'tech_guy',
        comment: 'Very protective',
        rating: 5,
        date: new Date('2023-09-20')
      }
    ],
    tags: ['tech', 'protective'],
    createdAt: new Date('2023-09-01'),
    updatedAt: new Date('2023-09-15')
  },
  {
    id: '15464540',
    name: 'Headphones',
    price: 79.99,
    description: 'Noise-cancelling headphones',
    colors: ['black', 'white'],
    category: 'Electronics',
    inStock: true,
    images: ['./images/products/1.png', 'headphones2.jpg'],
    rating: 4.8,
    reviews: [
      {
        username: 'music_lover',
        comment: 'Great sound quality!',
        rating: 5,
        date: new Date('2023-10-10')
      }
    ],
    tags: ['music', 'tech'],
    createdAt: new Date('2023-10-01'),
    updatedAt: new Date('2023-10-05')
  }
];
