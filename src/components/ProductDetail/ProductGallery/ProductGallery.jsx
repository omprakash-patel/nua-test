import { useState } from "react";

import styles from "../../../styles/ProductGallery.module.scss";

function ProductGallery({ product }) {
  const images = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const [activeImage, setActiveImage] =
    useState(images[0]);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <img
          src={activeImage}
          alt={product.title}
        />
      </div>

      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() =>
              setActiveImage(image)
            }
            className={styles.thumb}
          >
            <img
              src={image}
              alt={`thumb-${index}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;