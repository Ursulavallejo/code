
const alive = (req,res)  => {
    return res.status(200).send('API is Alive!')
}

export default  {
    alive
}