const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Try /api/spell{your word}');
});

app.get('/api/spell/:x',(req,res)=>{
    res.send(req.params.x + " " + req.query.number);

});

const port = process.env.PORT || 3000;



app.listen(port, ()=>console.log(`listening on ${port}`));