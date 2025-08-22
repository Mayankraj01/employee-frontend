import React from "react";

const EmployeeForm = ({ formData, setFormData, onSubmit, isEditing }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit} className="employee-form">
      <h2>{isEditing ? "Edit Employee" : "Add Employee"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="department"
        placeholder="Job Title"
        value={formData.department}
        onChange={handleChange}
        required
      />
      <button type="submit">{isEditing ? "Update" : "Add"}</button>
    </form>
  );
};

export default EmployeeForm;
