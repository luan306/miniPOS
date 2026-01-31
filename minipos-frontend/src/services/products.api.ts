// import api from "./api";

export interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
}
export async function fetchProducts(): Promise<Product[]> {
    return Promise.resolve([
        { id: 1, name: "Coca Cola", sku: "COCA-001", price: 12000, stock: 50 },
        { id: 2, name: "Pepsi", sku: "PEP-002", price: 11000, stock: 30 },
    ]);
}
