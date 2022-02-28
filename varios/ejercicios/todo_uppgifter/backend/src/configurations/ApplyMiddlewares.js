import cors from 'cors'
import express from "express";

//Config stuff
const cors_options = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}

// Middleware


const ApplyMiddlewares = (app) => {
    app.use(cors(cors_options))
    app.use(express.json())

}

export default ApplyMiddlewares