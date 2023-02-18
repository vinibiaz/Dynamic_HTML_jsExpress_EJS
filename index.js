/*
    1) npm init -y
    2) npm i express
    3) touch index.js
 */

const express = require('express');
const app = express();
const path = require('path');

/*
    Have to install EJS: npm i ejs
    After, create a directory called "views': mkdir views
*/
app.set('view engine','ejs')// to use EJS 
//make my application run in alls directory with path.join
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res)=>{
    //res.send("HI");
    //now instead of send a string i will send a view
    res.render('home.ejs');
})

app.listen(9999, ()=>{
    console.log("Listening on port 9999");
})
