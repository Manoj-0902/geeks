import React from "react";

const profession = ["Paleontologist", "Engineer", "Doctor", "Lawyer", "Actor"];

const SignIn = ({
  onHandleChange,
  username,
  password,
  email,
  phone,
  onHandleSignUp,
  onHandleLogin,
}) => {
  return (
    <div className="signin">
      <h3>Sign Up</h3>
      <input
        name="currentUsername"
        onChange={(e) => onHandleChange(e)}
        value={username}
        placeholder="Username"
      />
      <input
        name="currentPassword"
        onChange={(e) => onHandleChange(e)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <input
        name="currentEmail"
        onChange={(e) => onHandleChange(e)}
        value={email}
        type="email"
        placeholder="Email"
      />
      <input
        name="currentPhone"
        onChange={(e) => onHandleChange(e)}
        value={phone}
        type="number"
        placeholder="Phone No"
      />
      <select name="profession" onChange={(e) => onHandleChange(e)}>
        {profession.map((profession) => (
          <option value={profession}>{profession}</option>
        ))}
      </select>
      <div className="signup-buttons">
        <button onClick={onHandleSignUp}>Sign up</button>
        <button onClick={onHandleLogin}>Login</button>
      </div>
    </div>
  );
};

export default SignIn;
