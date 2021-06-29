import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StudentData() {
  const [state, newState] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/studentData").then((res) => {
      newState(res.data);
    });
  }, []);

  const getData = (id) => {
    let p = state.find((val) => {
      return id === val.id;
    });
    console.log(p);
  };

  const update = (id) => {
    let p = state.find((val) => {
      return id === val.id;
    });
    console.log(p);
  };

  return (
    <div>
      <table
        width="100%"
        style={{
          marginTop: "3rem",
          border: "solid",
          borderCollapse: "collapse",
        }}
      >
        <tbody>
          <tr>
            <th>Sr.No</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Class</th>
            <th>Marks %</th>
            <th>Edit</th>
          </tr>
          {state.map((v) => {
            return (
              <>
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <Link to="#" onClick={() => getData(v.id)}>
                    <td>{v.student_name}</td>
                  </Link>
                  <td>{v.email}</td>
                  <td>{v.phone}</td>
                  <td>{v.class_opted}</td>
                  <td>{v.marks_percentage}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => update(v.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentData;
