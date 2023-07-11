import Link from 'next/link';
import styles from '../page.module.css'


export default function  Navbar() {
    return (
      <div className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/about">About Valerie</Link>
        <Link href="/info">Practice Information</Link>
        <Link href="/contact">Contact</Link>
      </div>
    )
  }