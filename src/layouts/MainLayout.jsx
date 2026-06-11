import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import CartDrawer from "../components/CartDrawer/CartDrawer";

const MainLayout = () => {
  const [isCartOpen, setIsCartOpen] =
    useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <Navbar onCartOpen={openCart} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={closeCart}
      />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;