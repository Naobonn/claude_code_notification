import React from 'react';
import { Product } from '../types/Product';

interface ProductListProps {
  products: Product[];
  onDelete: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onDelete }) => {
  return (
    <div className="product-list">
      <h2>商品一覧</h2>
      {products.length === 0 ? (
        <p className="empty-message">商品がありません</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>商品名</th>
              <th>価格</th>
              <th>在庫数</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>¥{product.price.toLocaleString()}</td>
                <td>{product.stock}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => onDelete(product.id)}
                    aria-label="削除"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;