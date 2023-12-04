import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Test</Link>
          </li>
          <li>
            <Link to="/CreateUser">CreateUser</Link>
          </li>
          <li>
            <Link to="/LoginUser">LoginUser</Link>
          </li>

          <li>
            <Link to="/DeleteUser">DeleteUser</Link>
          </li>
          <li>
            <Link to="/Logout">Logout</Link>
          </li> 
          <li>
            <Link to="/Private">Private Page</Link>
          </li>

          <li>
            <Link to="/ChangeUserName">Change User Name</Link>
          </li>
          <li>
            <Link to="/ChangePassword">Change Password</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
