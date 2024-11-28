import React from "react";
import "../styles/topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo-container">
        <span className="logo">CB</span>
        <span className="brand-name">Cloudbanking</span>
      </div>

      <div className="user-info">
        <select className="dropdown">
          <option value="profile">
            <span className="user-initials">GC</span>
            <span className="user-name">Gregory Clark</span>
          </option>
        </select>
      </div>
    </div>
  );
};

export default Topbar;
