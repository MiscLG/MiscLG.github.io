import { lstat } from "fs/promises";
import React,{useEffect, useState} from "react";
import { getStorage,getDownloadURL,ref,list, StorageReference } from 'firebase/storage'
import AsyncImage from "./AsyncImage";

export default function FireBaseGallery(){
  const [refs,setRefs] = useState<StorageReference[]>([]);
  const updateRefs = async ()=>{
    const storage = getStorage()
    const listRef = ref(storage)
    const firstPage = await list(listRef, {maxResults:10})
    setRefs(firstPage.items)
  }
  useEffect(()=>{
    updateRefs()
  },[])

  return(
    <div>
    {
      refs.map((ref:StorageReference,ix:number)=> <AsyncImage fireRef={ref} key={ix}/>)
    }
    </div>
  )
}
