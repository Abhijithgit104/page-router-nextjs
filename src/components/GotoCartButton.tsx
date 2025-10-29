import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import styles from "../styles/product.module.css"

export default function GotoCartButton({ product }: any) {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(product);
    alert("✅ Added to Cart");
  };

  return (
    <button className={styles.button}
      onClick={handleAdd}
      style={{
        padding: "10px 20px",
        background: "#0070f3",
        color: "white",
        borderRadius: "6px",
        marginTop: "10px",
      }}
    >
      Add to Cart
    </button>
  );
}
