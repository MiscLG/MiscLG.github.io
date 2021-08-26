import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import myPicture from '../public/Me.jpg'
import myPic from '../public/MeButBetter.jpg'
import { yearDifference } from '../utils/timeUtils'

const Home: NextPage =  ({age}:any) => {
  return (
    <Layout>
      <Head>
        <title>Welcome!</title>
      </Head>
        <Image
          src={myPic}
          unoptimized
          alt="Picture of author."
          layout={'intrinsic'}
          priority={true}
          width={200}
          height={200}

        />
        <h1>Hello world!</h1>
        <p className={styles.description}>
          My name is Luis Fernando Garcia Cerecedo. I am a {age} year-old Computer Science student and aspiring Full-Stack developer.
          Please look around this website to find out more about myself and my projects, and don&apos;t forget to contact me if something piques your interest. 
        </p>
    </Layout>
  )
}

export async function getStaticProps() {
  const age = yearDifference(new Date("7/13/1999"));
  return {
    props:{
      age,
    }
  }
}


export default Home
