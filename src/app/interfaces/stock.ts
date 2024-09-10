export interface CategoryWiseStock {
  categoryId: number
  categoryName: string
  displayOrder: number
  imgPath: string
  products: StockProduct[]
}

export interface StockProduct {
  id: number
  name: string
  price: number
  imgPath: string
  isAvailable: boolean
  stock: number
}

export interface StockItemDto {
  motorNumber: number;
  product: string;
  price: number;
  imgPath: string;
  capacity: number;
  stock: number;
  soldOut: boolean;
}

export interface CabinRowDto {
  items: StockItemDto[];
}

export interface StockDisplayDto {
  cabin1: CabinRowDto[];
  cabin2: CabinRowDto[];
}