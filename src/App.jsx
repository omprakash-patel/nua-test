import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";
import CartProvider from "./stores/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;