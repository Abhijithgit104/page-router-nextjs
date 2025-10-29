// "use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log("Styles applied",styles)

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Welcome to MyStore</h1>
        <p>Your one-stop destination for quality products</p>
      </section>

      <section className={styles.recommended}>
        <h2>🛍️ Recommended Products</h2>
        <div className={styles.grid}>
          {products.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
