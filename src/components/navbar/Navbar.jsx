import { ShoppingBag } from "lucide-react";
import styles from "../../styles/Navbar.module.scss";
import useCart from "../../stores/useCart";
import { Link } from "react-router-dom";

const Navbar = ({ onCartOpen }) => {
  const { cartCount } = useCart();

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        
     <Link
  to="/"
  className={styles.logo}
>
  nua
</Link>
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