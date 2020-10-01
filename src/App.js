import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import employees from './employees.json'

function App() {
  const [employeeDirectory, setEmployeeDirectory] = useState(employees)
  const handlesearch = term => {
    console.log (term)
    const newList = employees.filter(employee => employee.name.first.toLowerCase().includes(term.toLowerCase()))
    setEmployeeDirectory(newList)
  }
  return (
    <>
    <input type = 'text' onChange = {event => handlesearch(event.target.value)}/> Search For First Name
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {employeeDirectory.map(employee => (
    <tr key = {employee.login.uuid}>
      <th scope="row">1</th>
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
