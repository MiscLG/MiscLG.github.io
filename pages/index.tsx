import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import myPicture from '../public/Me.jpg'
import myPic from '../public/MeButBetter.jpg'
import { getFileUrl } from '../utils/google_storage'

const Home: NextPage =  ({age,url}:any) => {
  return (
    <Layout>
      <Head>
        <title>Welcome!</title>
      </Head>
        <Image
          src={"hello"}
          loader={()=>url}
          alt="Picture of author."
          layout={'intrinsic'}
          priority={true}
          width={200}
          height={220}

        />
        <h1>Hello world!</h1>
        <p>
          My name is Luis Fernando Garcia Cerecedo. I am a {age} year-old Computer Science student and aspiring Full-Stack developer.
          Please look around this website to find out more about myself and my projects, and don&apos;t forget to contact me if something piques your interest. 
        </p>
    </Layout>
  )
}

export async function getStaticProps() {
  const filename = "AEnB2Uo9zV9dBgsxG9rbjZVWiWX-l5vr-0Hs8RUbdKU3vD-I1JcNlRcS__Xk2btMbeesK22JKAAlzeoRsBpJq_Qzmm1R0QMduAHk44pMpqsuh76AVC1y-Ak.yLLxje3JnStwSvb7"
  const url = await getFileUrl(filename)
  const age = 22;
  console.log(url)
  return {
    props:{
      age,
      url
    }
  }
}


export default Home
