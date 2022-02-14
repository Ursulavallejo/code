import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.SERVER_PORT


const app = express()

app.get('/', (req, res) => {
    console.log('GET Method')
    res.send('My third API! GET')
})


// Create
app.post('/', (req, res) => {
    console.log('POST My third API!')
    res.send(`My third API! Got a POST request! `)
})

// update
app.put('/', (req, res) => {
    console.log('PUT My third API!')
    res.send(`My third API! Got a PUT/ Update request! `)
})

// Delete
app.delete('/', (req, res) => {
    console.log('DELETE My third API!')
    res.send(`My third API! Got a DELETE request! `)
})

app.listen(port, () => {
    console.log(`Server listening on port: http://localhost:${port}`)
})