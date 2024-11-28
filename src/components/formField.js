import React from "react";

const FormField = ({ field }) => {
  const renderInput = () => {
    switch (field.type) {
      case "text":
        return (
          <input type="text" id={field.id} placeholder={field.placeholder} />
        );
      case "select":
        return (
          <select id={field.id}>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea id={field.id} placeholder={field.placeholder}></textarea>
        );
      case "file":
        return <input type="file" id={field.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-field">
      <label htmlFor={field.id}>{field.label}</label>
      {renderInput()}
    </div>
  );
};

export default FormField;
