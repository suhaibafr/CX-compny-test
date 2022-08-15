import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";
import "../navbar/navbar.css";

const Navbars = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="nav justify-content-center ">
          <Navbar.Brand className="text-success text-lg-start" href="#home">
            <img
              alt="logo"
              src={logo}
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Favorite Moive Directory
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
