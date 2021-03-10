// package web server
const express= require('express');
const bodyParser = require('body-parser'); // IMPORT DULU

//Express
const app= express();
//urutannya berlaku, servernya selalu nyala.
//Routes / Endpoints
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// tempelin ejs ke express
app.set('view engine', 'ejs');

const tugas=[]; //[]= array {}= object-> js dan python sama, klo py namany dictionary
const jadwal=[];

//GET - "/"
app.get("/", (req, res)=> {
    return res.render('index', {test: tugas, jadwal:jadwal});//test itu key, kiri namanya key, kanan= value, test isinya 123.
})
// GET - "/task"
//req= request, res= response
app.get("/tasks", (req, res)=> {
    return res.send("todolist nanti disini");
})
//POST
app.post("/tasks", (req, res)=> {
    tugas.push(req.body.task);
    console.log("berhasil");//kalau ada return, tulis di atasnya
    //console.log(req.body);
    return res.redirect("/");
})
app.post("/jadwal", (req, res)=> {
    jadwal.push(req.body.jadwal);
    console.log("berhasil");//kalau ada return, tulis di atasnya
    //console.log(req.body);
    return res.redirect("/");
})
//DELETE
app.delete("/tasks", (req,res)=> {
    hello.pop(req.body.task);
    console.log("berhasil");
    return res.redirect("/");
})
//listen - semacam ini sih
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})

// kalau misalnya aplikasinya nyala, ini berarti port
// portnya dipakai

//Don't reinvent wheel
//jangan matiin nodemon