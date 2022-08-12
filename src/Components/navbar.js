import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="nav-bar">
    <h1>Math Magicians</h1>
    <nav className="links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Calculator">Calculator</NavLink>
      <NavLink to="/quote">Quote</NavLink>
    </nav>
  </div>
);
export default NavBar;
