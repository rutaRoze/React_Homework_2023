//import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../authentication/AuthenticationProvider";
import "./NavBar.css"

function NavBar() {
  const { user } = useAuth();

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ padding: "0" }}
      >
        <div
          className="container-fluid "
          style={{ backgroundColor: "#3b5a5a", padding: "10px" }}
        >
          <a className="navbar-brand text-light" href="/">
            My Shop
          </a>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="!isNavCollapsed ? true : false"
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className={`${isNavCollapsed && "collapse"} navbar-collapse`}
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  aria-disabled="true"
                  href="/productlist"
                >
                  Product List
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link text-light"
                  aria-disabled="true"
                  href="/contacts"
                >
                  Contacts
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link  text-light" href="/fillform">
                  Add New Product
                </a>
              </li>
              {!user.username && (
                <li className="nav-item ">
                  <a className="nav-link text-light" href="/login">
                    Login
                  </a>
                </li>
              )}
              {user.username && (
                <li className="nav-item ">
                  <a className="nav-link text-light" href="/profile">
                    User Profile
                  </a>
                </li>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
