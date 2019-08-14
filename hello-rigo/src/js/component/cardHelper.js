import React from "react";
import collectionOfSw from "../../img/collectionOfSw.jpg";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

export const CardHelper = props => {
	return (
		<div>
			<Card style={{ width: 18 + "rem" }}>
				<CardImg top width="50%" src={collectionOfSw} />
				<CardBody>
					<CardTitle>
						<div>
							<strong>{props.settings.name}</strong>
						</div>
					</CardTitle>
					<CardText>
						<div>
							<div>Gender: {props.settings.gender}</div>
							<div>Eye Color: {props.settings.eyeColor}</div>
							<div>Hair Color: {props.settings.hairColor}</div>
						</div>
					</CardText>
					<Button color="primary">Learn more!</Button>
					<div className="favorite">
						<i className="far fa-heart" />
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

CardHelper.propTypes = {
	settings: PropTypes.object
};
