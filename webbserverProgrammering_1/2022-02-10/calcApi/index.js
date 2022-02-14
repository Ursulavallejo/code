import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.SERVER_PORT
const app = express()


//GET
app.get('/', (req, res) => {
    res.send('API is Alive!')
})

app.get('/helloWorld', (req, res) => {
    res.send('Hello World!')
})

//POST
app.post('/', (req, res) => {
    res.send('Got a POST request!')
})

app.post('/name/:input', ((req, res) => {
    const input = req.params.input
    res.send(`Your name is: ${ input }`)
}))


// Calculator API

app.post('/calc/add/:num1/:num2',((req, res) => {

    // tolkas som strängar
    // let number1 = req.params.num1
    // let number2 = req.params.num2

    // Tolka som nummer istället
    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 + number2
    res.send(`Summan av talen ${ number1 } + ${ number2 } = ${ sum } `)
}))

app.post('/calc/sub/:num1/:num2',((req, res) => {

    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 - number2
    res.send(`Differensen av talen ${ number1 } - ${ number2 } = ${ sum } `)
}))

app.post('/calc/multi/:num1/:num2',((req, res) => {

    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 * number2
    res.send(`Produkten av talen ${ number1 } * ${ number2 } = ${ sum } `)
}))

app.post('/calc/div/:num1/:num2',((req, res) => {

    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 / number2
    if (number2 ===0) {
        res.send('Division med noll är inte tillåtet')
    }
    res.send(`Kvoten av talen ${ number1 } / ${ number2 } = ${ sum } `)
}))

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${ port }`)
    })