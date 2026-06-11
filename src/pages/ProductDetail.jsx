import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getProductById } from "../../services/productService";
import styles from "../styles/ProductDetail.module.scss";
import { getProductById } from "../services/productService";
import ProductDetailSkeleton from "../components/ProductDetail/ProductDetailSkeleton";
import ProductGallery from "../components/ProductDetail/ProductGallery/ProductGallery";
import useCart from "../stores/useCart";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
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
        <div className={styles.quantity}>
          <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}> +</button>
        </div>
        <button
          onClick={handleAddToCart}
          className={styles.addToCart}
        >
          Add To Cart
        </button>
        <p>{product.description}</p>
      </div>
    </section>
  );
};

export default ProductDetail;