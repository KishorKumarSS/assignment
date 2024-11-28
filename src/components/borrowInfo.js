import React from "react";

const BorrowerInfo = () => {
  return (
    <div className="form-container">
      <div className="form">
        <div className="form-group">
          <label htmlFor="propertyName">Property Name</label>
          <input id="propertyName" type="text" placeholder="Property Name" />
        </div>
        <div className="form-group">
          <label htmlFor="propertyType">Property Type</label>
          <select id="propertyType">
            <option value="" disabled selected>
              Property Type
            </option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="units">Number of Units</label>
          <select id="units">
            <option value="" disabled selected>
              Number of Units
            </option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Property Address</label>
          <textarea id="address" placeholder="Enter Borrower Name"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="fileUpload">File Attachment</label>
          <div className="file-upload">
            <input type="file" id="fileUpload" className="file-input" />
            <label htmlFor="fileUpload" className="file-label">
              <span className="file-text">Browse</span> to Attach a file
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowerInfo;
