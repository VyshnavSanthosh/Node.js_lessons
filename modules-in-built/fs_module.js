const file = require('fs');
const os = require("os");

console.log(os.cpus().length);

// to create a new file and add content
file.writeFile("./text.txt", "hello world", (err) =>{
    reject(err)
    resolve("success");
})

//  to read the content in the file
file.appendFile("./text.txt", '\nHi how are you' ,() =>{

})

// to add new content in the file doesn't replace the old one compared to writeFile
file.readFile("./text.txt", "utf8", (err, data) =>{
    if(err) console.log(err);
    else console.log(data);
    
})

// to delete a file
file.unlink('file.txt', (err) => { });

// to rename a file
file.rename('old.txt', 'new.txt', (err) => { });


// to check if file exist
if (file.existsSync('file.txt')) { }

// to get info about file
file.stat('file.txt', (err, stats) => { });

// to create new directory
file.mkdir('new_folder', (err) => { });

// to list the file, forders in directory
file.readdir('folder', (err, files) => { });

// to delete directory
file.rmdir('folder', (err) => { });

// to copy a file
file.copyFile('source.txt', 'destination.txt', (err) => { });

// to monitor changes in file
file.watch('file.txt', (eventType, filename) => { });





console.log(__filename)






// using promise
function handlefile(){
    return new Promise((resolve,reject) =>{
        file.writeFile("./text.txt", "hello world", (err) =>{
            reject(err)
            resolve("success");
        })
    })
}
handlefile().then(
    file.readFile("./text.txt", "utf8", (err, data) =>{
    if(err) console.log(err);
    else console.log(data);
}))
.then(
    file.appendFile("./text.txt", '\nHi how are you' ,() =>{
    })
)
.then(
    file.readFile("./text.txt", "utf8", (err, data) =>{
        if(err) console.log(err);
        else console.log(data);
        
    })
)
.catch((err) =>{
    if(err == null) console.log("success");
    else console.log(err);
})



