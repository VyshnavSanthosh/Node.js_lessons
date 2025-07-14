const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) =>{
    const obj = {
        firstName : "vyshnav",
        lastName : "santhosh"
    }
    const name = "Vyshnav";
    let html = fs.readFileSync("index.html","utf-8");
    html = html.replace("{{name}}", name)
    if (req.url == "/") {
        res.write(`${new Date()} hello ${obj.firstName} ${obj.lastName} \n`)

        res.end("\n" + JSON.stringify(obj)) // res expects a string or a buffer not object, so here we are converting object to string
    }
    else if(req.url == "/about") res.end(html)
    else res.end(`
    <h1> 404 </h1>
    <p> Page not found </p>
    <a href="/"> Back to home</a>`)
    console.log(req.url);
    
})
server.listen(8000, () => console.log("Server started"));




