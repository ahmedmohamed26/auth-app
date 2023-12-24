import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("auth/login");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="d-flex justify-content-between w-100 ">
            <div>
              <Link className="m-3" to="/home">
                Home
              </Link>
              <Link className="m-3" to="/users">
                Users
              </Link>
            </div>
            <div>
              <Button className="m-3" onClick={logout}>
                Logout
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
