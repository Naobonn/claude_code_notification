from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime


class ProductBase(BaseModel):
    name: str = Field(..., description="商品名")
    price: float = Field(..., ge=0, description="価格")
    stock: int = Field(..., ge=0, description="在庫数")


class ProductCreate(ProductBase):
    pass


class Product(ProductBase):
    id: str = Field(..., description="商品ID")
    created_at: datetime = Field(default_factory=datetime.now, description="作成日時")
    
    class Config:
        from_attributes = True


class ProductUpdate(BaseModel):
    name: Optional[str] = Field(None, description="商品名")
    price: Optional[float] = Field(None, ge=0, description="価格")
    stock: Optional[int] = Field(None, ge=0, description="在庫数")