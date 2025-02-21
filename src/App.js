import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductPage from './components/ProductPage';  // 添加这一行
import InvestmentPage from './components/InvestmentPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import TransactionHistory from './components/TransactionHistory';
import AssetManagement from './components/AssetManagement';
import DefiServicesPage from './components/DefiServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/investment" element={<InvestmentPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/history" element={<TransactionHistory />} />
        <Route path="/assets" element={<AssetManagement />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/defi-services" element={<DefiServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;