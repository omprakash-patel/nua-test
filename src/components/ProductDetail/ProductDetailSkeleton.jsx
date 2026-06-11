import styles from "../../styles/ProductDetailSkeleton.module.scss";

function ProductDetailSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <div className={styles.mainImage} />

        <div className={styles.thumbnails}>
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className={styles.thumbnail}
            />
          ))}
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.title} />

        <div className={styles.category} />

        <div className={styles.price} />

        <div className={styles.description} />
        <div className={styles.description} />
        <div className={styles.descriptionSmall} />

        <div className={styles.button} />
      </div>
    </div>
  );
}

export default ProductDetailSkeleton;