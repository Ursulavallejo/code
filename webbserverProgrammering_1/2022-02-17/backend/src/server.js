import  express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

//Config stuff
const port = process.env.SERVER_PORT
const cors_options = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}

//Initiate ExpressAPP
const app = express()

// Middleware
app.use(cors(cors_options))
app.use(express.json())


//Database
const userDatabase = [
    {
        name:'Aram',
        age: 30,
        gender: 'Male'
    },
    {
        name:'Bengtina',
        age: 19,
        gender: 'Female'
    },
    {
        name:'Carin',
        age: 29,
        gender: 'Male'
    },
    {
        name:'Emil',
        age: 32,
        gender: 'Male'
    },
]

// API Functions

const userNames = () => {
    const names = []
    userDatabase.forEach(user => {
        names.push({
            name: user.name
        })
    })
    return names
}

const getUserByName = (name) => {
    let object = `Could not find "${name}" in database`
    userDatabase.forEach(user => {
        if (name === user.name) {
            object = user
            return
        }
    })
    return object
}

const updateUserByName = (name, newName, age, gender) => {
    let object = `Could not find "${ name }" in database`
    userDatabase.forEach(user => {
        if (name === user.name) {
            user.name = newName
            user.age = age
            user.gender = gender
            object = user
            return
        }
    })
    return object
}

// Endpoint * Business Logic
app.get('/', (req, res) => {
    res.send('API is Alive')
})

// CRUD
//CREATE
app.post('/user/', ((req, res) => {
    // const name = req.body.name
    // const age = req.body.age
    // const gender = req.body.gender
    console.log(req.body)
    const {name, age, gender} = req.body
    const newObject = {
        name: name,
        age: age,
        gender: gender
    }
    userDatabase.push(newObject)
    res.status(201).send(userDatabase)
} ))

//READ
app.get('/users', (req, res) =>{
    res.status(200).send(userDatabase)
} )

app.get('/users/name', (req, res) =>{
    const responseFromDb = userNames()
    res.status(200).send(responseFromDb)
} )

// Hitta Aram
app.get('/user/:name', (req, res) =>{
    const name = req.params.name
    const responseFromDb = getUserByName(name)
    res.status(200).send(responseFromDb)
} )

//UPDATE
app.put('/user/', (req, res) => {
    const { name, newName, age, gender } = req.body
    const response = updateUserByName(name, newName, age, gender)

    res.status(202).send(response)
})

//DELETE

// Start Server
app.listen(port, () => {
    console.log(`server running on address: port http://localhost:${port}`)
    }
)