import type {GetStaticProps,InferGetStaticPropsType} from 'next'
import cvObj from '../public/cvInfo.json'
import EducationEntry,{EduEntry} from '../components/cvItems/EducationEntry'
import ExperienceEntry,{ExpEntry} from '../components/cvItems/ExperienceEntry'
import FancyDownloadButton from '../components/buttons/FancyDownloadButton'
export default function CVPage({ cvObj }:InferGetStaticPropsType<GetStaticProps>) {
  
  return <>
  <h1>Curriculum Vitae</h1>
    <FancyDownloadButton filename={'/Garcia_Luis.pdf'} downloadName={"Garcia_Resume.pdf"}>Download My Resume</FancyDownloadButton>
    <h2 id={"edu"}>Education</h2>
    {cvObj.education.map((entry:EduEntry,ix:number)=><EducationEntry key={ix} entry={entry} />)}
    <hr/>
    <h2 id={"exp"}>Experience {" "}</h2>
    
    {cvObj.experience.map((entry:ExpEntry,ix:number)=><ExperienceEntry key={ix} entry={entry} />)}
    <hr/>
  </>
}

export const getStaticProps:GetStaticProps = async (context) =>{
  return {
    props:{
      cvObj,
    }
  }
}
