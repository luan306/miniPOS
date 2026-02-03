import {api} from "./api";

export interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
}


export async function fetchProducts(): Promise<Product[]> {
    const res = await api.get(`/products`);
    if (Array.isArray(res.data)) {
        return res.data;
    }
    if (Array.isArray(res.data?.data)) {
        return res.data.data;
    }
    return [];
}
export async function createProduct(product: Omit<Product, "id">): Promise<Product> {
    const res = await api.post(`/products`,product);
    return res.data;
}
export async function updateProduct(id: number, product: Omit<Product, "id">): Promise<Product> {
    const res = await api.put(`/products/${id}`,product);
    return res.data;    
    
}
export async function deleteProduct(id: number): Promise<void> {
    await api.delete(`/products/${id}`);
}


