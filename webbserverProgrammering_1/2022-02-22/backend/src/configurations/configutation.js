import dotenv from 'dotenv'

dotenv.config()
const port = process.env.SERVER_PORT

// Start Server
const  connectToPort = (app) => {
    app.listen(port, () => {
            console.log(`server running on address: port http://localhost:${port}`)
        })
}

export default  {
    connectToPort
}

