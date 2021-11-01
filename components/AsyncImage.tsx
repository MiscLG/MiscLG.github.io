import React,{useEffect, useState} from "react";
import { getStorage,getDownloadURL,ref,list, StorageReference } from 'firebase/storage'

export default function AsyncImage({fireRef}:{fireRef:StorageReference}){
  const [url,setUrl] = useState<string>()
  const fetchUrl = async ()=>{
    const url = await getDownloadURL(fireRef).then((url)=>{
      return url
    })
    setUrl(url)
  }

  useEffect(()=>{
    fetchUrl()
  })

  if (url) return <img src={url} width={200}/>

  return <p>Loading...</p>
  
}
