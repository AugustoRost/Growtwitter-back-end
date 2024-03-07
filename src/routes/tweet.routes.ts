import express from "express"
import { TweetController } from "../controllers/tweet.controller"

const router = express.Router();

const tweetcontroller = new TweetController()

//lista todos tweets
router.get('/tweets', tweetcontroller.index)

 // criar novo tweets
router.post('/tweets', tweetcontroller.store)

// //lista um unico tweets
router.get('/tweets/:id', tweetcontroller.show)

// //atualiza tweets
router.put('/tweets/:id', tweetcontroller.update)

// //deleta tweets
router.delete('/tweets/:id', tweetcontroller.delete)

export default router;