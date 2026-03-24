export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: ProductCategory
  stock: number
}

export interface ProductCategory {
  slug: string
  name: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Wishlist {
  products: Product[]
}

export interface ProductListResponse {
  products: Product[]
  total: number
}
