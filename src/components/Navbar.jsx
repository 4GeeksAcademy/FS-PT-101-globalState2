import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<span>cantidad de contactos {store.agenda?.length}</span>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/new_contact">
						<button className="btn btn-primary">create contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};