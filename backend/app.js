const express = require ('express')
const app = express();;
const port = 5000

 app.get('/', (req, res) => res.send('hello satish'));

 app.listen(port, () => console.log('listening at port 5000'))