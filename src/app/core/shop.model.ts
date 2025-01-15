export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  colors: string[];
  sizes?: string[];
  category: string;
  inStock: boolean;
  images: string[];
  rating?: number;
  reviews?: Review[];
  tags?: string[];
  createdAt: Date;
  updatedAt?: Date;
}

export interface Review {
  username: string;
  comment: string;
  rating: number;
  date: Date;
}
