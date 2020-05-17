const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Yo mantap yo');
})

const port = process.env.port || 3000
app.listen(port, () => {
    console.log("mantap"); 
})