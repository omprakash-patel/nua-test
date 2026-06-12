import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

// import ProductGrid from "../components/ProductGrid/ProductGrid";

import styles from "../styles/Home.module.scss";
import ProductGrid from "../components/ProductCard/ProductGrid";
import ProductSkeleton from "../components/ProductCard/ProductSkeleton";
import ProductGridSkeleton from "../components/ProductCard/ProductGridSkeleton";

function Home() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  return (
  <>
  
    <section className={styles.page}>
      <h1 className={styles.heading}>
        Products
      </h1>

     {loading && <ProductGridSkeleton />}

      {error && (
        <div className={styles.message}>
          {error}
        </div>
      )}

      {!loading && !error && (
        <ProductGrid products={products} />
      )}
    </section>
    </>
  );
}

export default Home;