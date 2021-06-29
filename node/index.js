const { json } = require("express");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.listen(4000, () => {
  console.log("we are live on port");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clavax",
  multipleStatements: true,
});
db.connect((err) => {
  if (err) throw err;
  console.log("connection established");
});
app.use(json());
app.use(cors());
app.post("/student", (req, res) => {
  const name = req.body.name;
  const father = req.body.father;
  const dob = req.body.dob;
  const adress = req.body.adress;
  const city = req.body.city;
  const state = req.body.state;
  const pin = req.body.pin;
  const phone = req.body.phone;
  const email = req.body.email;
  const class_opted = req.body.class_opted;
  const marks = req.body.marks;
  const date = req.body.date;
  const sql = `insert into student(student_name,father_name,dob,adress,city,state,pin,phone,email,class_opted,marks_percentage,date_enrolled) values("${name}","${father}","${dob}","${adress}","${city}","${state}","${pin}","${phone}","${email}","${class_opted}","${marks}","${date}")`;
  db.query(sql, (err, data) => {
    if (data) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

// API to fetch data

app.get("/studentData", (req, res) => {
  const sql = `select*from student`;
  db.query(sql, (err, data) => {
    if (data) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

// API to update data
app.put("/update/:id", (req, res) => {
  const name = req.body.name;
  const father = req.body.father;
  const dob = req.body.dob;
  const adress = req.body.adress;
  const city = req.body.city;
  const state = req.body.state;
  const pin = req.body.pin;
  const phone = req.body.phone;
  const email = req.body.email;
  const class_opted = req.body.class_opted;
  const marks = req.body.marks;
  const date = req.body.date;

  const sql = `update student set student_name="${name}",father_name="${father}",dob="${dob}",adress="${adress}",city="${city}",state="${state}",pin="${pin}",phone="${phone}",email="${email}",class_opted="${class_opted}",marks_percentage="${marks}",date_enrolled="${date}" where id  = ?`;
  db.query(sql, [req.params.id], (err, data) => {
    if (data) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

//API to get student by ID
app.get("/:id", (req, res) => {
  const sql = `select*from student where id =?`;
  db.query(sql, [req.params.id], (err, data) => {
    if (data) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});
