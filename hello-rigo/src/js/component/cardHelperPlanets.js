import React from "react";
import starWarPlanets from "../../img/starWarPlanets.jpg";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const CardHelperPlanets = props => {
	return (
		<div>
			<Card style={{ width: 18 + "rem" }}>
				<CardImg top width="50%" src={starWarPlanets} />
				<CardBody>
					<CardTitle>
						<div>
							<strong>{props.settings.name}</strong>
						</div>
					</CardTitle>
					<CardText>
						<div>
							<div>Population: {props.settings.population + " habitants"}</div>
							<div>Terrain: {props.settings.terrain}</div>
						</div>
					</CardText>
					<Link to={"/singlePlanet/" + props.settings.index}>
						<Button color="primary">Learn more!</Button>
					</Link>
					<div className="favorite">
						<i className="far fa-heart" />
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

CardHelperPlanets.propTypes = {
	settings: PropTypes.object
};
