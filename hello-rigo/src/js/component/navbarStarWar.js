import React from "react";
import { Link } from "react-router-dom";
import starWar from "../../img/Star_war.jpg";
import "../../styles/home.scss";
import { Navbar, NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

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
						<DropdownToggle caret>Favorites</DropdownToggle>
						<DropdownMenu>
							<DropdownItem header>Header</DropdownItem>
							<DropdownItem>Some Action</DropdownItem>
							<DropdownItem disabled>Action (disabled)</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>Foo Action</DropdownItem>
							<DropdownItem>Bar Action</DropdownItem>
							<DropdownItem>Quo Action</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</Navbar>
			</div>
		);
	}
}
