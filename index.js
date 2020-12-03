//require('dotenv').config()

const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 4000

console.log("web test")
console.log(__dirname)
console.log(process.env.LADY)
console.log(process.env.FOO)
console.log(process.env.ALWAYS)
console.log(process.env.PORT)

const app = express()
app.use(cors())
app.use(express.json())

// api, routers, the rest of the app.
app.use('/api/*', (_, res) => {
    res.json({data:"A test inside app.use"})
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
