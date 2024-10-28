import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Product from "./componets/Product";
import AboutPage from "./pages/AboutPage";
import TambahData from "./pages/TambahData";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import DashboardPage from "./pages/DashboardPage";
import UpdateProduct from "./pages/UpdateProduct";
import PageNotFound from "./pages/PageNotFound";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/tambah" element={<TambahData />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
