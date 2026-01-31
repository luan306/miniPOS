import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function MainLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      
      {/* SIDEBAR */}
      <Sider theme="dark">
        <h2
          style={{
            color: "white",
            textAlign: "center",
            padding: "16px",
          }}
        >
          MiniPOS
        </h2>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          onClick={(e) => navigate(e.key)}
          items={[
            {
              key: "/",
              icon: <DashboardOutlined />,
              label: "Dashboard",
            },
            {
              key: "/products",
              icon: <AppstoreOutlined />,
              label: "Sản phẩm",
            },
            {
              key: "/pos",
              icon: <ShoppingCartOutlined />,
              label: "Bán hàng",
            },
          ]}
        />
      </Sider>

      {/* RIGHT SIDE */}
      <Layout>
        
        {/* HEADER */}
        <Header
          style={{
            background: "#fff",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: 20,
          }}
        >
          Xin chào, Admin 👋
        </Header>

        {/* CONTENT */}
        <Content style={{ margin: "20px" }}>
          {children}
        </Content>

      </Layout>
    </Layout>
  );
}
