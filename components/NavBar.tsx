import React from 'react'
import Link from 'next/link'
import styles from '../styles/navigation.module.css'

const NavBar = () =>{
  return <div className={styles.nav}>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/art">
      <a>Art</a>
    </Link>
    <Link href="/code">
      <a>Code</a>
    </Link>
    <Link href="/cv">
      <a>CV</a>
    </Link>
  </div>
}

export default NavBar