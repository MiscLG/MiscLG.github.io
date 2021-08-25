const Cloud = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(process.cwd(), 'config/misc-9029-13bf21ec4b95.json')
// const serviceKey = './misc-9029-13bf21ec4b95.json'
console.log(serviceKey)

const { Storage } = Cloud
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'misclg-9029',
})

module.exports = storage