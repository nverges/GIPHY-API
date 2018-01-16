let express = require('express');
let path = require('path');

const app = express();

const PORT = process.env.port || 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + './public/index.html'));
});


app.listen (PORT, () => {
    console.log(`App listening on PORT ${PORT}`)
});