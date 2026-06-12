import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getProductById } from "../../services/productService";
import styles from "../styles/ProductDetail.module.scss";
import { getProductById } from "../services/productService";
import ProductDetailSkeleton from "../components/ProductDetail/ProductDetailSkeleton";
import ProductGallery from "../components/ProductDetail/ProductGallery/ProductGallery";
import useCart from "../stores/useCart";
import { addToCartApi } from "../services/cartService";
const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] =useState(1);
  const [loading, setLoading] = useState(true);
const [isAdding, setIsAdding] =useState(false);

const [cartError, setCartError] = useState("");
  const [error, setError] = useState("");
const handleAddToCart = async () => {
  try {
    setCartError("");
    setIsAdding(true);
    await addToCartApi(product);
    addToCart(product, quantity);
  } catch (error) {
    setCartError(error.message);
  } finally {
    setIsAdding(false);
  }
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
       <div className={styles.purchaseSection}>
  <div className={styles.quantityBox}>
    <span className={styles.quantityLabel}>
      Quantity
    </span>

    <div className={styles.quantity}>
      <button
        onClick={() =>
          setQuantity((prev) =>
            Math.max(1, prev - 1)
          )
        }
        aria-label="Decrease quantity"
      >
        −
      </button>

      <span>{quantity}</span>

      <button
        onClick={() =>
          setQuantity((prev) => prev + 1)
        }
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  </div>
<button
  onClick={handleAddToCart}
  disabled={isAdding}
  className={styles.addToCart}
>
  {isAdding
    ? "Adding..."
    : "Add To Cart"}
</button>
{
  cartError && (
    <p className={styles.error}>
      {cartError}
    </p>
  )
}
  {/* <button
    onClick={handleAddToCart}
    className={styles.addToCart}
  >
    Add to Cart • $
    {(product.price * quantity).toFixed(2)}
  </button> */}
</div>
        <p>{product.description}</p>
      </div>
    </section>
  );
};

export default ProductDetail;