import React, { useEffect } from "react";
import { testApi } from "../../services/test.api";
export default function SellingPage() {
    useEffect(() => {
  testApi();
}, []);
  return <div>Selling Page</div>;
}