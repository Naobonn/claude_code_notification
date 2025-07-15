import React, { useState, useEffect } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { Product, ProductCreate } from './types/Product';
import { productApi } from './services/api';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productApi.getProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('商品の読み込みに失敗しました');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (productData: ProductCreate) => {
    try {
      const newProduct = await productApi.createProduct(productData);
      setProducts([...products, newProduct]);
      setError(null);
    } catch (err) {
      setError('商品の追加に失敗しました');
      console.error(err);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      await productApi.deleteProduct(id);
      setProducts(products.filter(p => p.id !== id));
      setError(null);
    } catch (err) {
      setError('商品の削除に失敗しました');
      console.error(err);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>商品管理ツール</h1>
      </header>
      
      {error && <div className="error">{error}</div>}
      
      <ProductForm onSubmit={handleAddProduct} />
      
      {loading ? (
        <div className="loading">商品を読み込み中...</div>
      ) : (
        <ProductList products={products} onDelete={handleDeleteProduct} />
      )}
    </div>
  );
}

export default App;
