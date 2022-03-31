//const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
import helmet from "helmet"
import morgan from 'morgan'
// import bodyParser from "body-parser"
import middlewares from './src/middlewares/Middlewares.js'
import Configuration from "./config/Configuration.js"
import UserRoutes from "./src/routes/User.routes.js"
import bodyParser from "body-parser";


dotenv.config()
const app = express()
app.use(express.urlencoded({extended:true}))
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
// app.use(bodyParser.json())
const port = process.env.PORT

app.use(helmet())
app.use(morgan('common'))
// app.use(isAuthenticated)

app.get('/recipe', (req, res) => {
    res.send('Pancakes!')
})

// app.get('/user', isAuthenticated,(req, res) => {
//     // res.send('User!')
// })
UserRoutes.routes(app)
app.use(middlewares.notfound)
app.use(middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)
// mongoose.connect('mongodb://localhost/arastotutorialdatabase', { useNewUrlParser: true, useUnifiedTopology: true})
//     .then(()=> console.log('Successfully connected to the database!'))
//     .catch((error)=> {
//         console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE', error)
//         process.exit()
//     })


// function  isAuthenticated(req,res, next){
//     // console.log('Middleware function is running!')
//     // console.log(req.query.admin)
//     req.query.admin === 'true'
//     ? res.send('You are admin')
//         : res.send('You cannot make calls to this API URL')
//
//     next()
// }


// app.listen(port,()=> {
//     console.log(`Server working on port ${port}`)
// })

export default app