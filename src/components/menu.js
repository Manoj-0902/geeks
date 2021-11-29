import React from "react";

const Menu = ({ onHandleCompanyInfo }) => {
  return (
    <div className="menu">
      <button onClick={onHandleCompanyInfo}>Company Info</button>
    </div>
  );
};

export default Menu;
