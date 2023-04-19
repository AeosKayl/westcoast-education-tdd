import { Link, NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";
import logo from "../../assets/westcoast.png";

const Navbar = () => {
  return (
    <nav className={classes.topNav}>
      <div className={classes.logoWrapper}>
        <Link to={"/"}>
          <img className={classes.logo} src={logo} alt="westcoast logo" />
        </Link>
        {/* <Link to={"/"}>
          <h1>WestCoast Education</h1>
        </Link> */}
      </div>
      <ul className={classes.list}>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/courses"}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            COURSES
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/teachers"}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            TEACHERS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
