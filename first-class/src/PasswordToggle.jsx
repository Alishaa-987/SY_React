import React, { useState } from 'react';
import './PasswordToggle.css'; 

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  // Click hone par password show/hide karega
  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <input 
        type={showPassword ? "text" : "password"}  
        placeholder='Enter Password'
      />

      <button onClick={togglePassword}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordToggle;
