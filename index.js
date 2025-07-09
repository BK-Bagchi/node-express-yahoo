// console.log("hello node and express js")
const express= require("express")
const app= express()
app.listen(3000, ()=>{
    console.log("App is listening on 3000 port")
})


app.get("/", (req, res)=>{ //http://localhost:3000/
    res.send("Hello, I'm sending response on 3000 port")
})
app.get("/about", (req, res)=>{
    res.send("Ask me anything about me  ") //http://localhost:3000/about
})
app.get("/member/:memberid", (req, res)=>{ //http://localhost:3000/member/3
    res.send(req.params)
})
app.get("/member/:member_id/book/:book_id", (req, res)=>{ //http://localhost:3000/member/3/book/18
    res.send(req.params)
})
app.get("/member/:member_name-:member_id", (req, res)=>{ //http://localhost:3000/member/dipto-3
    res.send(req.params)
})
app.get("/search", (req, res)=>{ //http://localhost:3000/search?name=dipto, http://localhost:3000/search?name=dipto&age=28
    res.send(req.query)
})