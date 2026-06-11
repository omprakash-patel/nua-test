import { ShoppingBag } from "lucide-react";
import styles from "../../styles/Navbar.module.scss";
import useCart from "../../stores/useCart";

const Navbar = ({ onCartOpen }) => {
  const { cartCount } = useCart();

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          ShopHub
        </h1>

        <button
          className={styles.cartButton}
          onClick={onCartOpen}
        >
          <ShoppingBag size={22} />

          {cartCount > 0 && (
            <span className={styles.badge}>
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;