/*
    1) npm init -y
    2) npm i express
    3) touch index.js
 */
/*
add a Bootstrap
    1) mkdir public
    2) mkdir public/css public/js
    3) download https://getbootstrap.com/docs/4.0/getting-started/download/
    4) copy dowload to respectives directories
    5) add app.use(express.static(path.join(__dirname, 'public'))); in index.js
    6) download jquery and pasted in public/js
*/

const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
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

app.get('/names', (req, res)=>{
    const names = ['Vincius', 'Paula', 'Steve', 'Vanessa'];
    res.render('names.ejs', {listName : names});
})


app.get('/r/:subreddit', (req, res)=>{
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit});
})

app.get('/rand', (req, res)=>{
    const num  = Math.floor((Math.random()*10) + 1);//create num for a random number
    /*
        on render #1 arg is file name
                  #2 arg is a object that I can pass here, so I can use on my random.ejs
    */
    res.render('random', {passingRandomNumber: num});//I did't add ".ejs" because now I add a path.join as you can see on top
})

app.listen(5555, ()=>{
    console.log("Listening on port 5555");
})
