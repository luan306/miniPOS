import { Table, Card } from "antd";
import {  useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { fetchProducts } from "../../services/products.api";
import type { Product } from "../../services/products.api";

export default function ProductsPage() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    let isMounted = true;
    fetchProducts()
      .then((res) => {
        if (isMounted) setData(res);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
      return () => {
        isMounted = false;
      };
    }, []);

  const columns: ColumnsType<Product> = [
    { title: "ID", dataIndex: "id" },
    { title: "Tên sản phẩm", dataIndex: "name" },
    { title: "SKU", dataIndex: "sku" },
    { title: "Giá", dataIndex: "price" },
    { title: "Tồn kho", dataIndex: "stock" },
  ];

  return (
    <Card title="Quản lý sản phẩm">
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading}
      />
    </Card>
  );
}
