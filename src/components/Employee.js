import React, { useEffect, useState } from "react";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/employeeService";

import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";

const Employee = ({ page }) => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error("Failed to fetch employees", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateEmployee(editingId, formData);
      } else {
        await addEmployee(formData);
      }
      setFormData({ name: "", email: "", department: "" });
      setEditingId(null);
      loadEmployees();
    } catch (error) {
      console.error("Failed to save employee", error);
    }
  };

  const handleEdit = (employee) => {
    setFormData(employee);
    setEditingId(employee.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await deleteEmployee(id);
        loadEmployees();
      } catch (error) {
        console.error("Failed to delete employee", error);
      }
    }
  };

  return (
    <div className="employee-section" style={{ display: "flex", gap: "20px" }}>
      {(page === "add" || editingId) && (
        <aside className="sidebar" style={{ flex: 1 }}>
          <EmployeeForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            isEditing={!!editingId}
          />
        </aside>
      )}

      {(page === "list" || !editingId) && (
        <main className="main-content" style={{ flex: 2 }}>
          <EmployeeList
            employees={employees}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </main>
      )}
    </div>
  );
};

export default Employee;
