// "use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/product.module.css";
import GotoCartButton from "../../components/GotoCartButton";
import { ProductService } from "../../services/products-services";

export default function ProductDetails() {
  const router = useRouter();
  const { productid } = router.query; 

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
  if (productid) {
    const id = Array.isArray(productid) ? productid[0] : productid;
    ProductService.getProductById(Number(id))
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }
}, [productid]);


  if (!product) return <p>Loading product...</p>;

  return (
    <div className={styles.detail}>
      <img src={product.image} alt={product.title} width={250} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className={styles.price}>₹ {product.price}</p>
        <GotoCartButton product={product} />
      </div>
    </div>
  );
}
