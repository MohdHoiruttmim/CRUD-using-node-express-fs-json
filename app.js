const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const file = require("fs");
const data = require("./json/test.json");

//use internal css
app.use(express.static("views"));

//using body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//view engine ejs
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/send', (req, res, next) => {
    acc = {
        name: req.body.name,
        email: req.body.email,
    };
    console.log(req.body.task)
    res.redirect('/')
    next() })
// }, (req, res) => {
//         data.push(acc);
//         file.writeFile("./json/test.json", JSON.stringify(data), (err) => {
//             if (err) throw err;
//             console.log("Data written to file");
//         });
//     res.redirect('/')
// })

app.get('/api-test', (req, res) => {
    res.sendFile(__dirname + '/json/test.json')
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
})
