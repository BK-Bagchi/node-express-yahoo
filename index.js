// console.log("hello node and express js")
const express= require("express")
const app= express()
app.listen(3000, ()=>{
    console.log("App is listening on 3000 port")
})


app.set("view engine", "ejs")// declaring ejs view engine at the very top

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

app.get("/redirect", (req, res)=>{
    res.redirect("/about") //this will redirect browser to /about directory
})
app.get("/user", (req, res)=>{
    res.render("user") //goes to views folder and checks for user.ejs file. The user.ejs file contains the necessary html code
})
app.get("/download", (req, res)=>{
    res.download(__dirname+"/files/eDLPaper.pdf", "eDriving_License.pdf") //user will download a file named eDriving_License.pdf
})
app.get("/sendFile", (req, res)=>{
    res.sendFile(__dirname+"/files/eDLPaper.pdf") //user will get forwarded to a window where he will see the file and get option to download it
})
app.get("/end", (req, res)=>{
    res.write("This is the end response method")
    res.end() //response will end after this
})
app.get("/sendStatus", (req, res)=>{
    // res.sendStatus(404)
    res.status(404).send("404 Not found") //these are the 2 ways to send status
})