import { Card, Form, Input, Button, Typography, message } from "antd";
import { useAuthStore } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const { Title } = Typography;

export default function LoginPage() {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
interface LoginForm {
    email: string;
    password: string;
  }
  const onFinish = async (values: LoginForm) => {
    setLoading(true);

    // 🔥 Fake API delay (giống gọi server)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Mock login success
    login({
      id: 1,
      name: values.email,
    });
    message.success(`Welcome ${values.email} 🔥`);

    navigate("/");
    setLoading(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb",
      }}
    >
      <Card style={{ width: 420 }}>
        <Title level={3} style={{ textAlign: "center" }}>
          MiniPOS 🚀
        </Title>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="admin@email.com" size="large" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu!" },
              { min: 6, message: "Ít nhất 6 ký tự!" },
            ]}
          >
            <Input.Password placeholder="******" size="large" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            loading={loading}
          >
            Đăng nhập
          </Button>
        </Form>
      </Card>
    </div>
  );
}
