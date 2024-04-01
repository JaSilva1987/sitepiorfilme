// Menu.tsx
import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/movies">Movie List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
