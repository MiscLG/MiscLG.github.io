import Layout from '../components/layout'
import EducationEntry  from '../components/cvItems/educationEntry'
export default function CVPage() {
  return <Layout>
    <h2>Education</h2>
      <EducationEntry
      school={"Loyola Marymount University"}
      degree={'Bachelor of Science'}
      details={
        (<>Major: Computer Science<br/>
        Minor: Animation<br/>
        September 2017- May 2021<br/></>)
      }
      />
    <h2>Experience</h2>
    <h2>Projects</h2>
    
  </Layout>
}