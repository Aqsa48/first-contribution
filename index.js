const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
const fs = require('fs');

app.get('/', (req, res) => {
    let rawdata = fs.readFileSync('./Data/contribution.json');
    let contributors = JSON.parse(rawdata);
    console.log(contributors);

    res.render('index', { members: contributors })
})


app.listen(process.env.PORT, error => {
    if (error) console.log("error is " + error);
    else console.log("listening to port " + 3000);

});

// For running this project locally.
// app.listen(3000);
