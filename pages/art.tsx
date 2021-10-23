import type {GetStaticProps,InferGetStaticPropsType} from 'next'
import {getApp} from 'firebase/app'
import Image from 'next/image'
import { getStorage,getDownloadURL,ref,list, StorageReference } from 'firebase/storage'
export default function ArtPage({ urls }:InferGetStaticPropsType<GetStaticProps>) {
  return (
    <>
      {
        urls.map((url:string, ix:number)=>(
          <Image
          key={ix}
          src={url}
          unoptimized
          alt="Picture of author."
          layout={'intrinsic'}
          priority={true}
          width={200}
          height={200}
        />
        ))
      }
    </>
  )

}

export const getStaticProps:GetStaticProps = async (context) =>{
  const storage = getStorage()
  const listRef = ref(storage)
  const firstPage = await list(listRef, {maxResults:10})
  const urls:string[] = []
  for (let ref of firstPage.items){
    const url = await getDownloadURL(ref).then((url)=>{
      return url
    })
    urls.push(url)
  }

  return {
    props:{
      urls,
    }
  }
}