// function notfound(req,res, next){
//     const error = new Error(`Not found: ${req.originalUrl}`)
//     res.status(404)
//     next(error)
// }
//
// function errorHandler(error, req, res, next){
//     const statuscode = res.statusCode === 200 ? 500 : res.statusCode
//     res.status(statuscode)
//     res.json({
//         statuscode: statuscode,
//         message: error.message,
//         stacktrace: error.stack,
//     })
// }

import dotenv from 'dotenv'

dotenv.config()

const notfound = (req,res, next)=>{
    const error = new Error(`Not found: ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (error, req, res, next) =>{
    const statuscode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statuscode)
    res.json({
        statuscode: statuscode,
        message: error.message,
        stacktrace: process.env.ENVIROMENT === 'PRODUCTION'? 'lols' : error.stack,
    })
}

export default {
    notfound,
    errorHandler
}