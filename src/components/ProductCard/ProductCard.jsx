import { memo } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/ProductCard.module.scss";
import useCart from "../../stores/useCart";

function ProductCard({ product }) {
   const { addToCart } = useCart();
   const handleQuickAdd = () => {
    addToCart(product);
  };
  return (
    <article className={styles.card}>
      <Link
        to={`/product/${product.id}`}
        className={styles.imageWrapper}
      >
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
      </Link>

      <div className={styles.content}>
        <Link
          to={`/product/${product.id}`}
          className={styles.title}
        >
          {product.title}
        </Link>

        <div className={styles.price}>
          ${product.price}
        </div>

        <button className={styles.button}  onClick={handleQuickAdd}>
          Quick Add
        </button>
      </div>
    </article>
  );
}

export default memo(ProductCard);