export interface category {
  id: string
  name: string
  imgPath: string,
  displayOrder: number
}

export interface MonthWiseSales {
  month: string
  total: number
}

export interface DailySales {
  day: string
  total: number
}

export interface SalesTotalDto {
  total: number
  upi: number
  account: number
  cash: number
  card: number
}

export interface SalesLegendsDto {
  month: SalesTotalDto
  today: SalesTotalDto
}

export interface ProdcutSalesSumDto {
  name: string
  quantity: number
}