import React, {useState} from 'react'
import Layout from '../components/layout'
// import { uploadImage } from '../utils/google_storage'

export default function AdminPage() {
  const [image,setImage] = useState<any>(null)
  // const handleSubmit = ()=>uploadImage(image);
  return <Layout>
    <form onSubmit={()=>console.log("submitted")}>
      <label>Add file</label>
      <input type={'file'} />
    </form>
  </Layout>
}