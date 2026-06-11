import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;