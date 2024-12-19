import React from 'react'
import Link from 'next/link'
import styles from '../styles/navigation.module.css'

const NavBar = () => {
  return <div className={styles.nav}>
    <Link legacyBehavior href="/">
      <a>Home</a>
    </Link>
    <Link legacyBehavior href="/about">
      <a>About</a>
    </Link>
    <Link legacyBehavior href="/art">
      <a>Art</a>
    </Link>
    <Link legacyBehavior href="/code">
      <a>Code</a>
    </Link>
    <Link legacyBehavior href="/cv">
      <a>CV</a>
    </Link>
  </div>
}

export default NavBar