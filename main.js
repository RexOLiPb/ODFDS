const express = require('express')
const app = express()
const port = 3000

const reg = require('./driver')


app.use(express.static('/'))


app.get('/', (req, res) => res.send(index.html));
app.get('/driver/SignUp', function(req, res){ 
    
}); 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
