import React from "react";
import { Link } from "react-router-dom";
import starWar from "../../img/Star_war.jpg";
import "../../styles/home.scss";
import { Button, Navbar, NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from "reactstrap";
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
				<Navbar color="light" light expand="md">
					<NavbarBrand>
						<Link to="/">
							<img src={starWar} width="80" height="60" />
						</Link>
					</NavbarBrand>
					<Dropdown className="justify-content-end" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
						<Context.Consumer>
							{({ store }) => {
								return (
									<DropdownToggle caret>
										{"Favorites"}
										<Badge color="secondary">{store.favorites.length}</Badge>
									</DropdownToggle>
								);
							}}
						</Context.Consumer>
						<DropdownMenu>
							<Context.Consumer>
								{({ store, actions }) => {
									return store.favorites.map((value, index) => {
										return (
											<DropdownItem header key={index}>
												{value}
												<span>
													<i
														className="fas fa-trash-alt"
														onClick={() => actions.removeFavorite(value, index)}
													/>
												</span>
											</DropdownItem>
										);
									});
								}}
							</Context.Consumer>
						</DropdownMenu>
					</Dropdown>
				</Navbar>
			</div>
		);
	}
}
