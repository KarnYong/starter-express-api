const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'us-east.connect.psdb.cloud',
  user: 'y5glnjpyqjrl6yv72caz',
  password: 'pscale_pw_kvayJuXwZeWjkrn89rghoTQnppiAHEUUtyW0Z3KZ2fF',
  database: 'melivecode',
  ssl: {}
});

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/attractions', function (req, res, next) {
  connection.query(
    'SELECT * FROM attractions',
    function(err, results, fields) {
      res.json(results);
    }
  );
})

app.listen(process.env.PORT || 3000)
