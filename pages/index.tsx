import type { NextPage,GetStaticProps,InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import myPicture from '../public/Me.jpg'
import myPic from '../public/MeButBetter.jpg'
import { yearDifference } from '../utils/timeUtils'

export default function Home({ age }:InferGetStaticPropsType<GetStaticProps>) {
  return (
    <>
      <Head>
        <title>Welcome!</title>
      </Head>
        <img src={myPicture} alt="Picture of Luis Garcia" width={200}/>
        <h1>Hello world!</h1>
        <p className={styles.description}>
          I&apos;m <span className={"highlighted"}>Luis Fernando Garcia Cerecedo</span>, a {age} year-old <span className={"highlighted"}>Computer Science &amp; Animation</span> student and aspiring <span className={"highlighted"}>full-stack software developer</span>.
          Please look around this website to find out more about myself and what I&apos;m up to. Also don&apos;t forget to contact me if something piques your interest. 
        </p>
    </>
  )
}

export const getStaticProps:GetStaticProps = async (context) =>{
  const age:number = yearDifference(new Date("7/13/1999"));
  return {
    props:{
      age,
    }
  }
}

