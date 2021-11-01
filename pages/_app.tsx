import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'
import Layout from '../components/layout'

const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY, 
  authDomain: "misc-9029.firebaseapp.com",
  databaseURL: "https://misc-9029.firebaseio.com",
  projectId: "misc-9029",
  storageBucket: "misc-9029.appspot.com",
  messagingSenderId: "43515094373",
  appId: process.env.FIREBASE_APP_ID, 
  measurementId: "G-97DBK3L632",
};
const app = initializeApp(firebaseConfig)

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>)
}
export default MyApp
