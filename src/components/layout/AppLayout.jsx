import React, { useContext } from "react";
import { Layout, Spin } from "antd";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import AppSidebar from "./AppSidebar";
import CryptoContext from "../../context/crypto-context";

export default function AppLayout() {
  const { loading } = useContext(CryptoContext);
  return (
    <Layout>
      <Spin spinning={loading} fullscreen />
      <AppHeader />
      <Layout>
        <AppSidebar />
        <AppContent />
      </Layout>
    </Layout>
  );
}
