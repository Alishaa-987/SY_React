import React, { useState } from 'react';
import './PasswordToggle.css';

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="password-container">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        className="password-input"
      />

      <button
        onClick={togglePassword}
        className="toggle-btn"
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordToggle;
