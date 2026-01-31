import { useEffect } from "react";
import { testApi } from "../../services/test.api";


export default function DashboardPage() {
useEffect(() => {
  testApi();
}, []);
return <div>Dashboard Page</div>;
}
  


