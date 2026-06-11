import ProductSkeleton from "./ProductSkeleton";
import styles from "../../styles/ProductGridSkeleton.module.scss";

function ProductGridSkeleton() {
  return (
    <div className={styles.grid}>
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
}

export default ProductGridSkeleton;