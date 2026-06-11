import styles from "../../styles/ProductSkeleton.module.scss";

function ProductSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>

      <div className={styles.content}>
        <div className={styles.title}></div>
        <div className={styles.titleSmall}></div>

        <div className={styles.price}></div>

        <div className={styles.button}></div>
      </div>
    </div>
  );
}

export default ProductSkeleton;