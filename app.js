const express = require("express")
const userData =  require("./post.js")
require("./mongo.js")
require('dotenv').config()
const app = express()
const hbs = require('hbs');
app.use(express.json())
app.use(express.static("./public"))
app.set('view engine', 'hbs');
app.set("views" , "./views")
hbs.registerPartials( './partials', function (err) {if(err){console.log('partiial error');}});

//using middleware routers

const homepage = require("./routes/homepage")
const { deleteMany } = require("./post.js")



//setting routes
app.use('/',homepage)

app.get('/allposts',async(req,res)=>{
   await userData.find((err,data)=>{
        res.send(data)
    })
})

app.post('/create',(req,res)=>{
    const tets = new userData(req.body)
    tets.save(()=>{
        res.send(tets)
    })
})


app.post("/postTweet", ()=>{
    
})


app.get('/about',(req,res)=>{
   
    res.render('about')
    
   
})

app.listen(3000,()=>{
    console.log("http://localhost:3000/");
})

