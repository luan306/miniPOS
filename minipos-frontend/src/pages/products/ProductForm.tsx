import { Modal, Form, Input, InputNumber} from "antd";
import type { Product } from "../../services/products.api";

interface Props {
  open: boolean;
  initialValues?: Partial<Product>;
  onCancel: () => void;
  onSubmit: (product: Omit<Product, "id">) => void;
}
export default function ProductForm({ open, initialValues, onCancel, onSubmit }: Props) {
  const [form] = Form.useForm();
  return (
    <Modal
      title={initialValues ? "Sửa sản phẩm" : "Thêm sản phẩm"}
      open={open}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onSubmit(values);
            form.resetFields();
          });
      }}
      afterOpenChange={(visible) => {
        if(visible && initialValues){
            form.setFieldsValue(initialValues);
        }
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Tên sản phẩm"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="sku"
          label="SKU"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="price"
          label="Giá"
          rules={[{ required: true }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="stock"
          label="Tồn kho"
          rules={[{ required: true }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </Modal>
    
    
  );
}
