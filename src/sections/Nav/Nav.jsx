import { Link, NavLink } from "react-router-dom";
import styles from "./NavStyles.module.css";

function Nav() {
  return (
    <nav
      className={`${styles.expanded} navbar navbar-expand-lg fixed-top p-3 ps-3 pe-3 pt-2`}
    >
      <div className='container-fluid'>
        {/* Logo */}
        <Link className='navbar-brand' to='/'>
          D.A
        </Link>
        {/* Toggle Button */}
        <button
          className='navbar-toggler shadow-none border-0'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasNavbar'
          aria-controls='offcanvasNavbar'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        {/* Sidebar */}
        <div
          className={`${styles.sidebar} offcanvas offcanvas-end`}
          tabIndex='-1'
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
        >
          <div className='offcanvas-header ms-3 me-3'>
            <h5 className='navbar-brand' id='offcanvasNavbarLabel'>
              Doaa Awan
            </h5>
            <button
              type='button'
              className='btn-close shadow-none'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          {/* Sidebar Body */}
          <div className='offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0'>
            <ul className='navbar-nav justify-content-center align-items-center fs-5 flex-grow-1'>
              <li className='nav-item mx-2'>
                <NavLink className='nav-NavLink' aria-current='page' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item mx-2'>
                <NavLink className='nav-NavLink' to='/Projects'>
                  Projects
                </NavLink>
              </li>
              <li className='nav-item mx-2'>
                <NavLink className='nav-NavLink' to='/Experience'>
                  Experience
                </NavLink>
              </li>
              {/* <li className='nav-item mx-2'>
                <NavLink className='nav-NavLink' to='/About'>
                  About
                </NavLink>
              </li> */}
            </ul>
            {/* Contact Button */}
            <div className='d-flex flex-lg-row justify-content-center align-items-center gap-3'>
              <Link
                to='/Contact'
                className={`${styles.btnContact} text-white text-decoration-none px-4 py-2 rounded-5 shadow`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
