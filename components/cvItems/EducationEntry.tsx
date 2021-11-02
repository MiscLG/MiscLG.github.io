import React from 'react'
import Entry from './Entry'
export interface EduEntry{
  school: string
  degree: string
  fields: {majors:string[],minors?:string[]}
  startDate:{month:number,year:number}
  endDate?:{month:number,year:number}
  additional?: {
    gpa?:number
    honors?: Array<{name:string,decription:string}>
    coCurriculars?: {[key:string]:string}
  }

}
export default function EducationEntry({entry}:{entry:EduEntry}) {
  let options = {month:"long", year:"numeric"} as const
  const startDate = new Date(entry.startDate.year,entry.startDate.month-1).toLocaleDateString("en-US",options)
  const endDate = entry.endDate ? new Date(entry.endDate.year,entry.endDate.month-1).toLocaleDateString("en-US",options): null
  const bullets = [
    `GPA: ${entry.additional?.gpa} ${entry.additional?.honors?.map((item:any)=>", "+ item.name)}`
  ]
  if (entry.fields?.minors?.length) bullets.unshift(`${entry.fields.minors?.map((field:string)=> "Minor in " + field)}`)
  return <Entry
    subTopic = {entry.degree+ ", "+ entry.fields.majors.map((major:string,ix:number)=>major)}
    topic = {" @" + entry.school}
    info = {startDate + `${endDate && "- " + endDate}`}
    summary = {bullets}
  />
}
