import { Table, Card,Button,Space, Popconfirm} from "antd";
import {  useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import ProductForm from "./ProductForm";
import { createProduct, deleteProduct, fetchProducts, updateProduct } from "../../services/products.api";
import type { Product } from "../../services/products.api";

export default function ProductsPage() {
  const [data, setData] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const handleAdd = async (product: Omit<Product, "id">) => {
    try {
      setSaving(true);
      const newProduct = await createProduct(product);
    // Logic to add product goes here
    setData((prevData) => [...prevData, newProduct]);
    setOpen(false);
  }finally {
    setSaving(false);
  }
    
    
  };
   const handleEdit = async (product: Omit<Product, "id">) => {
  if (!editing) return;
  try {
    setSaving(true);
    const updated = await updateProduct(editing.id, product);
    setData((prevData) =>
      prevData.map((item) =>
        item.id === updated.id ? updated : item
      )
    );
    setOpen(false);
    setEditing(null);
  }finally {
    setSaving(false);
  }
};
  // Create a wrapper function for the form submission
  const handleFormSubmit =async (product: Omit<Product, "id">) => {
    if (editing) {
      handleEdit(product);
    } else {
      handleAdd(product);
    }
  };

useEffect(() => {
    setLoading(true)
    fetchProducts()
      .then((List)=> setData(List))
      .finally(() => setLoading(false));
    }, []);

  const columns: ColumnsType<Product> = [
    { title: "ID", dataIndex: "id" },
    { title: "Tên sản phẩm", dataIndex: "name" },
    { title: "SKU", dataIndex: "sku" },
    { title: "Giá", dataIndex: "price" },
    { title: "Tồn kho", dataIndex: "stock" },
    {
    title: "Hành động",
    render: (_, record) => (
      <Space>
        <a
          onClick={() => {
            setEditing(record);
            setOpen(true);
          }}
        >
          Sửa
        </a>

        <Popconfirm
          title="Xóa sản phẩm này?"
          onConfirm={async() => {
           await deleteProduct(record.id);
           setData((prevData) => prevData.filter((item) => item.id !== record.id));
          }}
        >
          <a style={{ color: "red" }}>Xóa</a>
        </Popconfirm>
      </Space>
    ),
  },
  ];

  return (
  <Card
    title="Quản lý sản phẩm"
    extra={
      <Button type="primary" onClick={() => setOpen(true)}>
        Thêm sản phẩm
      </Button>
    }
  >
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data}
      loading={loading}
    />

    <ProductForm
      confirmLoading={saving}
      open={open}
      initialValues={editing ?? undefined}
      onCancel={() => {
        setOpen(false);
        setEditing(null);
      }}
      onSubmit={handleFormSubmit}
    />
  </Card>
);

}


