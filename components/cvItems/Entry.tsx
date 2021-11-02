import React from 'react'
import styles from '../../styles/CV.module.css'
export default function Entry(
  {topic,subTopic,info,summary}:{
    topic:string,
    subTopic?:string,
    info?:string,
    summary?:string[],
    
  }) {
  return (
    <section className={styles.entry}>
      <h3 className={styles.topic}>
        <span className={"highlighted"}>{subTopic ?? ""}</span>
        {topic}
      </h3>
      <p>{info}</p>
      <ul>
        {summary?.map((point:string,ix:number)=><li key={ix}>{point}</li>)}
      </ul>
    </section>
  )
}
