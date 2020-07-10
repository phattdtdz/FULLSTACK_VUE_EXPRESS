const express = require('express');

const mongodb = require ("mongodb");

router = express.Router();

router.get('/', async(req,res)=>{
const posts = await loadPostsCollection();
await res.send(await posts.find({}).toArray())

})

router.post('/',async(req,res)=>{
    const posts = await loadPostsCollection();
    await posts.insertOne({
        name: req.body.text,
        number_phone: req.body.text
        
    });
    res.status(201).send()
})  


router.delete('/:id', async(req,res)=>{
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
})

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect("mongodb+srv://user_admin:Phat1998@cluster0-qnjmt.gcp.mongodb.net", {useNewUrlParser: true});
    return client.db('vue-express').collection("posts")
}


module.exports = router;
