import React from "react";

const Sidebar = ({ setPage }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">EMS</h2>
      <nav>
        <button onClick={() => setPage("home")}>🏠 Home</button>
        <button onClick={() => setPage("list")}>📋 View Employees</button>
        <button onClick={() => setPage("add")}>➕ Add Employee</button>
        
        
      </nav>
    </div>
  );
};

export default Sidebar;
