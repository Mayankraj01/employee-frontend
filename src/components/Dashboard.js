import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Employee from "./Employee";

const Dashboard = () => {
  const [page, setPage] = useState("home");

  const renderContent = () => {
    switch (page) {
      case "list":
      case "add":
        // Employee component handles both add and list views
        return <Employee page={page} />;
      case "home":
      default:
        return (
          <div className="welcome">
            <h2>Welcome to the Employee Management System</h2>
            <p>Use the sidebar to manage employees.</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar setPage={setPage} />
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Employee Dashboard</h1>
          <button className="logout-btn" onClick={() => alert("Logout clicked")}>Logout</button>
        </header>
        <div className="dashboard-main">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
