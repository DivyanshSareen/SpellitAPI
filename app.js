const express = require('express');
const {spell} = require('./generate.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(spell);

app.get('/', (req,res) => {
    res.send('Try /api/spell{your word}');
});

app.get('/api/spell/:x',(req,res)=>{
    // res.send(req.params.x + " " + req.query.number);
    var wor = spell.suggest(req.params.x)
    res.send(wor);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`listening on ${port}`));