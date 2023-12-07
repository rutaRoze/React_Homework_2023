import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../authentication/AuthenticationProvider";

function NavBar() {

const {user} = useAuth();

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>My Shop</Navbar.Brand>
          <Nav className="me-auto">
            <div className="p-3 text-decoration-none">
              <Link className="text-decoration-none" to="/">
                Home
              </Link>
            </div>
            <div className="p-3">
              <Link className="text-decoration-none" to="/productlist">
                Product List
              </Link>
            </div>
            <div className="p-3">
              <Link className="text-decoration-none" to="/contacts">
                Contacts
              </Link>
            </div>
            <div className="p-3">
              <Link className="text-decoration-none" to="/fillform">
                Add New Product
              </Link>
            </div>
            {!user.username && (
            <div className="p-3">
              <Link className="text-decoration-none" to="/login">
                Login
              </Link>
            </div>
            )}

            {user.username && (
            <div className="p-3">
              <Link className="text-decoration-none" to="/profile">
                User Profile
              </Link>
            </div>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
