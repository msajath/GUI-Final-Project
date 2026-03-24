import type { Product, ProductCategory, ProductListResponse } from '../types/product'

const BASE_URL = 'https://dummyjson.com'

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return (await response.json()) as T
}

export async function getProducts(): Promise<Product[]> {
  const data = await fetchJson<ProductListResponse>(`${BASE_URL}/products?limit=0`)
  return data.products
}

export async function getCategories(): Promise<ProductCategory[]> {
  return fetchJson<ProductCategory[]>(`${BASE_URL}/products/categories`)
}

export async function getProductById(id: number): Promise<Product> {
  return fetchJson<Product>(`${BASE_URL}/products/${id}`)
}