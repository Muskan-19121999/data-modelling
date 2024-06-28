const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log("App is listening on port 8000");
});

//convert the frontend form data to object and assign it as req.body
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    fs.writeFileSync("log.txt",`${Date.now()} ${req.method} ${req.path}`)
    next()
});

app.get("/hello", (req, res) => {
    res.json({
        status: true
    });
});

app.get("/", (req, res) => {
    console.log("m here")
    const stream = fs.createReadStream("lorem.txt", "utf-8");
    stream.on("data",(chunk)=>
    res.write(chunk))
    stream.on("end",()=>res.end())
});

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 1 resolved.');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Promise 2 rejected.'));
    }, 2000);
});

Promise.race([promise1, promise2])
    .then((value) => {
        console.log('First settled promise:', value); // Logs "Promise 2 rejected."
    })
    .catch((error) => {
        console.error('First settled promise rejected:', error); // Logs "Promise 2 rejected."
    });