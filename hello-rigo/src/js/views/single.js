import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Jumbotron, Button } from "reactstrap";
import { Card, CardImg } from "reactstrap";

export class Single extends React.Component {
	render() {
		return (
			<div className="container">
				<div>
					<Card>
						<CardImg
							top
							width="100%"
							src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
							alt="Card image cap"
						/>
					</Card>
				</div>
				<div>
					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>
				</div>
			</div>
		);
	}
}

Single.propTypes = {
	match: PropTypes.object
};
