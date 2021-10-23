import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'
import Layout from '../components/layout'

const firebaseConfig = {
  apiKey: "AIzaSyDlsC3ZWL1DTl3GcWiiGMvT4CB8hQxirk8",
  authDomain: "misc-9029.firebaseapp.com",
  databaseURL: "https://misc-9029.firebaseio.com",
  projectId: "misc-9029",
  storageBucket: "misc-9029.appspot.com",
  messagingSenderId: "43515094373",
  appId: "1:43515094373:web:c00b478d0a6726e746ad8c",
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
