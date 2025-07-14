let fs = require("fs");

const readstream = fs.createReadStream("text.txt", {  // createReadStream creates a readable stream to read a file in chunks, instead of loading the whole file into memory at once.
    encoding:'utf-8',
    highWaterMark:5  //highWaterMark is a buffer size threshold that determines how much data a stream can buffer before pausing the reading or writing process. default : 64kb
});

const writestream = fs.createWriteStream("hello.txt");

readstream.on("data",(chunk) =>{
    console.log(chunk);
    writestream.write(chunk); 
});


// Pipe

readstream.pipe(writestream);
