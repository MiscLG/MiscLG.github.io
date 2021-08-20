import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/layout.module.css'
import NavBar from './NavBar'
const Layout:NextPage = ({children}:any) =>{

  return <div className={styles.container}>
    <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      <NavBar/>
      <div className={styles.buttons}>
        <a>Admin Login</a>
      </div>
    </header>
    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>
      &copy; 2021 MiscLG
    </footer>
  
  </div>
}

export default Layout