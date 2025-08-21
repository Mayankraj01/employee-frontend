import React from "react";

const EmployeeList = ({ employees, onEdit, onDelete }) => (
  <div className="employee-list">
    <h2>Employee List</h2>
    {employees.length === 0 ? (
      <p>No employees found.</p>
    ) : (
      <ul>
        {employees.map((emp) => (
          <li key={emp.id} className="employee-item">
            <strong>{emp.name}</strong> | {emp.email} | {emp.jobTitle}
            <button onClick={() => onEdit(emp)}>Edit</button>
            <button onClick={() => onDelete(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default EmployeeList;
