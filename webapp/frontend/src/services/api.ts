import { Product, ProductCreate } from '../types/Product';

const API_URL = 'http://localhost:8000/api';

export const productApi = {
  async getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('商品の取得に失敗しました');
    }
    return response.json();
  },

  async createProduct(product: ProductCreate): Promise<Product> {
    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error('商品の作成に失敗しました');
    }
    return response.json();
  },

  async deleteProduct(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('商品の削除に失敗しました');
    }
  },
};