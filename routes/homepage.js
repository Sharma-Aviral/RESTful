let express = require('express')
let router = express.Router()

router.get("/", (req,res,e)=>{
        res.render("index")
})

module.exports =  router