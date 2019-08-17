import React from "react";
import { Link } from "react-router-dom";
import starWar from "../../img/Star_war.jpg";
import "../../styles/home.scss";
import { NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Context } from "../store/appContext";

export class NavbarStarWar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	render() {
		return (
			<div className="container">
				<nav className="navbar navbar-light bg-light mb-3 h-23">
					<Link to="/">
						<img src={starWar} width="80" height="60" />
					</Link>
					<div className="ml-auto">
						<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
							<Context.Consumer>
								{({ store }) => {
									return (
										<DropdownToggle caret>
											{"Favorites"}
											<span className="badge badge-success mr-3">{store.favorites.length}</span>
										</DropdownToggle>
									);
								}}
							</Context.Consumer>
							<DropdownMenu>
								<Context.Consumer>
									{({ store, actions }) => {
										return store.favorites.map((value, index) => {
											if (value === "empty") {
												return (
													<DropdownItem header key={index}>
														{value}
													</DropdownItem>
												);
											} else {
												return (
													<DropdownItem header key={index}>
														{value}
														<span>
															<i
																className="fas fa-trash-alt"
																onClick={() => actions.removeFavorite(index)}
															/>
														</span>
													</DropdownItem>
												);
											}
										});
									}}
								</Context.Consumer>
							</DropdownMenu>
						</Dropdown>
					</div>
				</nav>
			</div>
		);
	}
}
