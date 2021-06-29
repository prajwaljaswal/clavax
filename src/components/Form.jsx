import React from "react";
import { useState } from "react";
import axios from "axios";

function Form() {
  const [studentName, setName] = useState("");

  const Name = (e) => {
    setName(e.target.value);
  };

  const [fatherName, setfName] = useState("");
  const Fathername = (e) => {
    setfName(e.target.value);
  };

  const [dob, newDob] = useState("");

  const DOB = (e) => {
    newDob(e.target.value);
  };
  const [adress, newAdress] = useState("");

  const Adress = (e) => {
    newAdress(e.target.value);
  };

  const [city, newCity] = useState("");

  const City = (e) => {
    newCity(e.target.value);
  };

  const [state, newState] = useState("");
  const State = (e) => {
    newState(e.target.value);
  };

  const [pin, newPin] = useState("");

  const Pin = (e) => {
    newPin(e.target.value);
  };

  const [phone, newPhone] = useState("");

  const Phone = (e) => {
    newPhone(e.target.value);
  };
  const [email, newEmail] = useState("");

  const Email = (e) => {
    newEmail(e.target.value);
  };
  const [classs, newClasss] = useState("");
  const dance = (e) => {
    newClasss(e.target.value);
  };
  const [percentage, newPercentage] = useState("");
  const Percentage = (e) => {
    newPercentage(e.target.value);
  };
  const [dateenrolled, newDate] = useState("");
  const Dateenrolled = (e) => {
    newDate(e.target.value);
    console.log(e.target.value);
  };

  const users = {
    name: studentName,
    father: fatherName,
    dob: dob,
    adress: adress,
    city: city,
    state: state,
    pin: pin,
    phone: phone,
    email: email,
    class_opted: classs,
    marks: percentage,
    date: dateenrolled,
  };
  const submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/student", users).then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>Student Name </label>
          <br />
          <input className="formControl" required type="text" onChange={Name} />
        </div>

        <div>
          <label>Father Name</label>
          <br />
          <input
            className="formControl"
            type="text"
            required
            onChange={Fathername}
          />
        </div>

        <div>
          <label>DOB</label>
          <br />
          <input className="formControl" type="date" required onChange={DOB} />
        </div>

        <div>
          <label>Adress</label>
          <br />
          <input
            className="formControl"
            type="text"
            required
            onChange={Adress}
          />
        </div>

        <div>
          <label>City</label>
          <br />
          <input className="formControl" type="text" required onChange={City} />
        </div>

        <div>
          <label>State</label>
          <br />
          <input
            className="formControl"
            type="text"
            required
            onChange={State}
          />
        </div>

        <div>
          <label>Pin</label>
          <br />
          <input className="formControl" type="text" required onChange={Pin} />
        </div>

        <div>
          <label>Phone</label>
          <br />
          <input
            className="formControl"
            type="text"
            required
            onChange={Phone}
          />
        </div>

        <div>
          <label>Email</label>
          <br />
          <input
            className="formControl"
            type="email"
            required
            onChange={Email}
          />
        </div>
        <br />
        <div>
          <label>Class</label>
          <select onChange={dance}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div>
          <label>Percentage</label>
          <br />
          <input
            className="formControl"
            type="text"
            required
            onChange={Percentage}
          />
        </div>

        <div>
          <label>Date Enrolled</label>
          <br />
          <input
            className="formControl"
            type="date"
            required
            onChange={Dateenrolled}
          />
        </div>
        <br />
        <input
          type="submit"
          className="btn btn-primary"
          onSubmit={submit}
        ></input>
      </form>
    </div>
  );
}

export default Form;
