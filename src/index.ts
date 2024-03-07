import express from 'express'
import cors from 'cors'
import tweetroutes from './routes/tweet.routes'
import userRoutes from '../src/routes/user.routes'
const app = express()

app.use(express.json())
app.use(cors())
app.use(userRoutes)
app.use(tweetroutes)



app.listen(3333, ()=>{
    console.log('servidor na porta 3333');
})

