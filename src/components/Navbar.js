import React from "react";
import { Link } from "gatsby";
const Navbar = () => {
  return (
    <nav>
      <Link href="#" class="logo">
        Detroit<span>Recipes</span>
      </Link>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/about">tags</Link>
        </li>
        <li>
          <Link to="/recipes">recipes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
