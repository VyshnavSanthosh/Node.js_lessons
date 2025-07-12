const http = require('http');

const server = http.createServer((req,res) =>{
    if (req.url == "/") res.end("Welcome to home page")
    else if(req.url == "/about") res.end("Welcome to about page")
    else res.end(`
    <h1> 404 </h1>
    <p> Page not found </p>
    <a href="/"> Back to home</a>`)
    console.log(req.headers);
    
})
server.listen(8000, () => console.log("Server started"));




