import * as gc from '../config/'
import * as util from 'util'

const bucket = gc.bucket('misc-9029.appspot.com')

async function createBucket(bucketName:string) {
  // Creates the new bucket
  await gc.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
}

export async function uploadImage(file:any) {
  return  new Promise((resolve, reject) => {
    const { originalname, buffer } = file
  
    const blob = bucket.file(originalname.replace(/ /g, "_"))
    const blobStream = blob.createWriteStream({
      resumable: false
    })
    blobStream.on('finish', () => {
      const publicUrl = util.format(
        `https://storage.googleapis.com/${bucket.name}/${blob.name}`
      )
      resolve(publicUrl)
    })
    .on('error', () => {
      reject(`Unable to upload image, something went wrong`)
    })
    .end(buffer)
  })
}

export async function getFile(filename:string) {
  const storage = new Storage()
  
  const file = bucket.file(filename)
  return file.get().then((data)=>{
    const file = data[0]
    const apiRes = data[1]
    console.log(file)
    console.log(apiRes)
  })
}

export async function getFileUrl(filename:string) {
  const file = bucket.file(filename)
  return file.publicUrl()
}