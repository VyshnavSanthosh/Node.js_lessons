const path = require('path');

console.log(__filename);
console.log(__dirname);

// to return the last part of a path (usually filename).
console.log(path.basename(__filename));

// you can also pass the path of file
console.log(path.basename('/users/home/file.txt'));  // file.txt

// to return the last part of a path (usually folder).
console.log(path.basename(__dirname));

// to return the extension of the file.
console.log(path.extname(__filename));

// to join multiple path segments safely, adding necessary / between them.(it doesn't actually join they just creates the correct text string)
console.log(path.join("download", "game","gta-V"));

 // attaches  sequence of paths into an absolute path
console.log(path.resolve(__filename));

//Checks if a given path is absolute.
console.log(path.isAbsolute('vyshnav/Documents/node.js/path_module.js')); // false
console.log(path.isAbsolute('/home/vyshnav/Documents/node.js/http.js')); // true

// to return an object with various components of the path
console.log(path.parse(__filename));