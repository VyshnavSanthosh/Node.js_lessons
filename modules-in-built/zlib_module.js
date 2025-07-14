const fs = require('fs');
const {createGzip} = require('zlib'); // compressing 
const {createGunzip} = require('zlib'); // decompressing
const readstream = fs.createReadStream("../hello.txt",{
    encoding:'utf-8',
    highWaterMark: 3
});

const compressed = fs.createWriteStream("compressed.txt.gz");

readstream.pipe(createGzip()).pipe(compressed).on('finish',()=> {
    console.log("finished")
    const readcompressed = fs.createReadStream("compressed.txt.gz");
    const decompressed = fs.createWriteStream("decompressed.txt");
    readcompressed.pipe(createGunzip()).pipe(decompressed).on('finish', ()=>{
    console.log("finish")
});
});

