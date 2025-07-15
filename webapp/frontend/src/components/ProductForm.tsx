import React, { useState } from 'react';
import { ProductCreate } from '../types/Product';

interface ProductFormProps {
  onSubmit: (product: ProductCreate) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ProductCreate>({
    name: '',
    price: 0,
    stock: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'name' ? value : Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim()) {
      onSubmit(formData);
      setFormData({ name: '', price: 0, stock: 0 });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="name">商品名</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">価格</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="stock">在庫数</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      <button type="submit" className="submit-button">商品を追加</button>
    </form>
  );
};

export default ProductForm;