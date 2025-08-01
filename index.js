// console.log("hello node and express js")
import express from "express"; //modern technique to import express in project
const app = express();
app.listen(3000, () => {
  console.log("App is listening on 3000 port");
});

app.set("view engine", "ejs"); //as view engine the ejs will be working and .ejs files will be saved in 'views' folder. declaring at the very top
app.use(express.json()); //allows this app to request json file anywhere under this line. declare at the very top
app.use(express.urlencoded({ extended: false })); //allows this app to get form data
app.use(express.static("public")); //declaring that any static file related to this project will be saved in 'public' folder

app.get("/", (req, res) => {
  //http://localhost:3000/
  res.send("Hello, I'm sending response on 3000 port"); //
});
app.get("/about", (req, res) => {
  res.send("Ask me anything about me  "); //http://localhost:3000/about
});
app.get("/member/:memberid", (req, res) => {
  //http://localhost:3000/member/3
  res.send(req.params);
});
app.get("/member/:member_id/book/:book_id", (req, res) => {
  //http://localhost:3000/member/3/book/18
  res.send(req.params);
});
app.get("/member/:member_name-:member_id", (req, res) => {
  //http://localhost:3000/member/dipto-3
  res.send(req.params);
});
app.get("/search", (req, res) => {
  //http://localhost:3000/search?name=dipto, http://localhost:3000/search?name=dipto&age=28
  res.send(req.query);
});

//All response methods
app.get("/send", (req, res) => {
  res.send("Send method"); //most commonly used to send response
});
app.get("/redirect", (req, res) => {
  res.redirect("/about"); //this will redirect browser to /about directory
});
app.get("/user", (req, res) => {
  res.render("user"); //goes to views folder and checks for user.ejs file. The user.ejs file contains the necessary html code
});
app.get("/download", (req, res) => {
  res.download(__dirname + "/files/eDLPaper.pdf", "eDriving_License.pdf"); //user will download a file named eDriving_License.pdf
});
app.get("/sendFile", (req, res) => {
  res.sendFile(__dirname + "/files/eDLPaper.pdf"); //user will get forwarded to a window where he will see the file and get option to download it
});
app.get("/end", (req, res) => {
  res.write("This is the end response method");
  res.end(); //response will end after this
});
app.get("/sendStatus", (req, res) => {
  // res.sendStatus(404)
  res.status(404).send("404 Not found"); //these are the 2 ways to send status
});
app.get("/headerSend", (req, res) => {
  res.send("response send");
  console.log(res.headersSent); //returns true/false depending on weather response sending is done
});
app.get("/setGet", (req, res) => {
  res.set("name", "Dipto Bagchi"); //name is variable like container
  res.send("set and get done with " + res.get("name")); // reading the variable value
});

//All necessary request methods
app.get("/params/:parameter", (req, res) => {
  res.send(req.params); //gets the parameter/s and sends as response
});
app.get("/query", (req, res) => {
  res.send(req.query); //gets the query/s and sends as response
});
app.post("/body", (req, res) => {
  res.send(req.body);
  console.log(req.body); //used postman for this test. postman inputs some data, both in json and form format. this method accepts the data and shows in console
});
