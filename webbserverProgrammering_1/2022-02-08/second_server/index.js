// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
// const port = 3002
const port = process.env.SERVER_PORT
const app = express()

app.get('/', (req, res) => {
    res.send('API Alive!')
})

app.listen(port, () => {
    console.log(`Server listening on port: http://localhost:${port}`)
    // console.log('Server running on port http://localhost:3002')

})