import React from 'react'
import Entry from './Entry'
export interface ExpEntry{
  organization: string
  position: string
  startDate:{month:number,year:number}
  endDate?:{month:number,year:number}
  summaryPoints?: string[]
}
export default function ExperienceEntry({entry}:{entry:ExpEntry}) {
  let options = {month:"long", year:"numeric"} as const
  const startDate = new Date(entry.startDate.year,entry.startDate.month-1).toLocaleDateString("en-US",options)
  const endDate = entry.endDate ? new Date(entry.endDate.year,entry.endDate.month-1).toLocaleDateString("en-US",options): null
  return <Entry
    subTopic={entry.position}
    topic={" @" + entry.organization}
    info = {`${startDate} ${endDate && "- " + endDate}`}
    summary ={entry.summaryPoints?.map((field:string)=>`Minor in ${field}`)}
  />
}
