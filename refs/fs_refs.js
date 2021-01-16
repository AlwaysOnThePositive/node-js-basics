const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw new Error(err);

//     console.log('done')
// });

// fs.writeFile(path.join(__dirname, "notes", "mynote.txt"), "hello from file", (err) => {
//   if (err) throw new Error(err);

//   console.log("file done");
// });

// fs.readFile(
//   path.join(__dirname, "notes", "mynote.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw new Error(err);

//     console.log(data);
//   }
// );

fs.rename(path.join(__dirname, 'notes', 'mynote.txt'), path.join(__dirname, 'notes', 'notes.txt'), err => {
    if (err) throw new Error(err);
});
