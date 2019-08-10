import React from "react";
import { Link } from "react-router-dom";
import starWar from "../../img/Star_war.jpg";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<img src={starWar} width="80" height="60" />
				</Link>
				{/*<div className="ml-auto">
					<Link to="/demo" />*/}
				<div className="dropdown show">
					<a
						className="btn btn-primary dropdown-toggle"
						href="#"
						role="button"
						id="dropdownMenuLink"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</a>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</nav>
		);
	}
}
