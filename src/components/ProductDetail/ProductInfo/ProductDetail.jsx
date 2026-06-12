import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../../services/productService";

import ProductGallery from "../../components/ProductGallery/ProductGallery";
import ProductDetailSkeleton from "../../components/ProductDetailSkeleton/ProductDetailSkeleton";

import styles from "./ProductDetail.module.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (err) {
      setError("Failed to load product");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  if (error) {
    return (
      <div className={styles.error}>
        {error}
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <ProductGallery product={product} />
      <div className={styles.info}>
        <h1>{product.title}</h1>
        <p className={styles.category}>
          {product.category}
        </p>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
      </div>
    </section>
  );
};

export default ProductDetail;