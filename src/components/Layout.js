import React from 'react'
import { Link, Outlet } from 'react-router-dom'

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
            <li>
              <Link to="/DeleteUser">DeleteUser</Link>
            </li>
            <Link to="/Logout">Logout</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
