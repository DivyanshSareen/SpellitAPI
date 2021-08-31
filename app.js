const express = require('express');
const {spell} = require('./generate.js');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

var midw = function(req,res,next) {
  req.dat = ({"ans" : spell.suggest(req.params.x)});
  next();
}

app.get('/', (req,res) => {
    res.send('Try /api/spell{your word}');
});


app.get('/api/spell/:x', midw,(req,res)=>{
    // // res.send(req.params.x + " " + req.query.number);
    // var wor = spell.suggest(req.params.x);
    // res.send(wor);
    // res.send(req.wid);
    res.send(req.dat);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`listening on ${port}`));