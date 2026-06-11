import ProductCard from "../ProductCard/ProductCard";

import styles from "../../styles/ProductGrid.module.scss";

function ProductGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;