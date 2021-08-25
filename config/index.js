const Cloud = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(process.cwd(), 'config/key_file.json')

console.log(serviceKey)

const { Storage } = Cloud
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'misclg-9029',
})

module.exports = storage