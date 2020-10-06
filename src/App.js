import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import employees from './employees.json'


function App() {
  const [employeeDirectory, setEmployeeDirectory] = useState(employees)
  const [sortOrder, setSortOrder] = useState("")
  const handlesearch = term => {
    console.log(term)
    const newList = employees.filter(employee => employee.name.first.toLowerCase().includes(term.toLowerCase()))
    setEmployeeDirectory(newList)
  }
  const handleSort = (category, sortItem) => {
    const newList = employeeDirectory.sort(function (a, b) {
      let nameA
      let nameB
      if (category !== "email") {
        nameA = a[category][sortItem].toUpperCase(); // ignore upper and lowercase
        nameB = b[category][sortItem].toUpperCase(); // ignore upper and lowercase]

      } else {
        nameA = a[category].toUpperCase(); // ignore upper and lowercase
        nameB = b[category].toUpperCase(); // ignore upper and lowercase]
      }
      if (sortOrder === "asc") {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;

      } else {
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      }
    });
    setSortOrder(prev => prev !== "asc" ? "asc" : "des")
    setEmployeeDirectory(newList)

  }
  return (
    <>
      <input type='text' onChange={event => handlesearch(event.target.value)} /> Search For First Name
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" onClick={() => handleSort("name", "first")}>First</th>
            <th scope="col" onClick={() => handleSort("name", "last")}>Last</th>
            <th scope="col" onClick={() => handleSort("email", "")}>Email</th>
          </tr>
        </thead>
        <tbody>
          {employeeDirectory.map((employee, num) => (
            <tr key={employee.login.uuid}>
              <th scope="row">{num + 1}</th>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
            </tr>

          ))}

        </tbody>
      </table>
    </>
  );
}

export default App;
