export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  created_at: string;
}

export interface ProductCreate {
  name: string;
  price: number;
  stock: number;
}