import logo from "../../assets/logo-patron.png";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark" expand="lg">
				<Container>
					<Link to={"/react-neyrab-2/"} className="navbar-brand">
						<img
							src={logo}
							width="40"
							height="40"
							className="d-inline-block align-top"
							alt="Logo Tienda"
						/>{" "}
						Patronato tienda NO oficial
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Link to={"/react-neyrab-2/"} className="nav-link">
								Inicio
							</Link>
							<NavDropdown title="Categorías" id="basic-nav-dropdown">
								<Link
									to={"/react-neyrab-2/category/Camisetas"}
									className="dropdown-item">
									Camisetas
								</Link>
								<NavDropdown.Divider />
								<Link
									to={"/react-neyrab-2/category/Short"}
									className="dropdown-item">
									Short
								</Link>
								<NavDropdown.Divider />
								<Link
									to={"/react-neyrab-2/category/Pelotas"}
									className="dropdown-item">
									Pelotas
								</Link>
								<NavDropdown.Divider />
								<Link
									to={"/react-neyrab-2/category/Accesorios"}
									className="dropdown-item">
									Accesorios
								</Link>
							</NavDropdown>
							<Link
								to={"/react-neyrab-2/contacto"}
								className="nav-link">
								Contacto
							</Link>
							<CartWidget />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}
export default NavBar;
