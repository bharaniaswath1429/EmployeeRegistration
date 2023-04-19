const bodyP = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyP.json());

app.use(
    bodyP.urlencoded({
        extended: true
    })

)

app.use(express.static('public'));

const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host:'localhost',
  database: 'postgres',
  password: 'Aswath!29',
  port: 5432,
})

client.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Database is connected.")
})




app.get('/',function(req,res){
    res.sendFile('public/index.html',{root:__dirname});
})

app.post('/post', (req, res) => {
    console.log(req.body);
    const { fname, lname, dob, email, phoneno, gender, qual, exp, doj} = req.body;
    client.query('insert into employeeregistration(first_name, last_name, date_of_birth, email, phone_number, gender, qualification, experience, date_of_joining) values($1,$2,$3,$4,$5,$6,$7,$8,$9)', [fname, lname, dob, email, phoneno, gender, qual, exp, doj], function (err, results) {
         
      if (err) {
        throw err
      }
      //res.send(`Added.${results.insertId}`)
      client.query('select * from employeeregistration', function (err, results) {
        if (err) throw err
        
        res.send(results.rows)
      })
    })
    
     
})
app.listen(8000, () => {
    console.log(`Server connected at http://localhost:8000`);
})
