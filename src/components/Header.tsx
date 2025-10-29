import Link from "next/link";
import styles from "@/styles/nav.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} prefetch={true}>
        MyStore
      </Link>

      <nav className={styles.nav}>
        <Link href="/products" prefetch={true}>Products</Link>
        <Link href="/cart" prefetch={false}>Cart</Link>
        <Link href="/about" prefetch={false}>About</Link>
        <Link href="/contact" prefetch={false}>Contact</Link>
      </nav>
    </header>
  );
}
