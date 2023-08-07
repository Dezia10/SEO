import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <nav>
      <ul className="sticky">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="favorites">Favorites</NavLink>
          </li>
        )}
      </ul>
    </nav>
    // <Routes>
    //   <Route path="/" element={<Home />}>
    //     <Route index element={<Home />} />
    //     <Route path="favorites" element={<Favorites />} />
    //     {/* <Route path="contact" element={<Contact />} />
    //     <Route path="*" element={<NoPage />} /> */}
    //   </Route>
    // </Routes>
  );
};

export default Nav;
