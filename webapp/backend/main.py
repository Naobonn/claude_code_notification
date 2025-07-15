from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
import uuid
from datetime import datetime

from models import Product, ProductCreate, ProductUpdate

app = FastAPI(title="商品管理API", version="1.0.0")

# メモリ内でのデータ保存（将来的にDBに置き換え可能）
products_db: Dict[str, Product] = {}

# CORS設定（後で実装）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React開発サーバー
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "商品管理APIへようこそ"}


@app.post("/api/products", response_model=Product)
async def create_product(product: ProductCreate):
    """商品を新規作成"""
    product_id = str(uuid.uuid4())
    new_product = Product(
        id=product_id,
        name=product.name,
        price=product.price,
        stock=product.stock,
        created_at=datetime.now()
    )
    products_db[product_id] = new_product
    return new_product


@app.get("/api/products", response_model=List[Product])
async def get_products():
    """全商品を取得"""
    return list(products_db.values())


@app.get("/api/products/{product_id}", response_model=Product)
async def get_product(product_id: str):
    """特定の商品を取得"""
    if product_id not in products_db:
        raise HTTPException(status_code=404, detail="商品が見つかりません")
    return products_db[product_id]


@app.put("/api/products/{product_id}", response_model=Product)
async def update_product(product_id: str, product_update: ProductUpdate):
    """商品情報を更新"""
    if product_id not in products_db:
        raise HTTPException(status_code=404, detail="商品が見つかりません")
    
    stored_product = products_db[product_id]
    update_data = product_update.dict(exclude_unset=True)
    
    for field, value in update_data.items():
        setattr(stored_product, field, value)
    
    return stored_product


@app.delete("/api/products/{product_id}")
async def delete_product(product_id: str):
    """商品を削除"""
    if product_id not in products_db:
        raise HTTPException(status_code=404, detail="商品が見つかりません")
    
    del products_db[product_id]
    return {"message": "商品を削除しました"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)