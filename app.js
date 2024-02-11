const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT_URI || 3000;

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});
