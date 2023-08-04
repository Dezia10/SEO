import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="favorites">Favorites</NavLink>
      </li>
    </ul>
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
