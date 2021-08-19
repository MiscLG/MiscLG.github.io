import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import myPicture from '../public/Me.jpg'
import myPic from '../public/MeButBetter.jpg'

const Home: NextPage = ({age}:any) => {
  return (
    <Layout>
      <Head>
        <title>Welcome!</title>
      </Head>
        <Image
          src={myPic}
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
  const age = 22;
  return {
    props:{
      age
    }
  }
}


export default Home
