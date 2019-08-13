import React from "react";
import collectionOfSw from "../../img/collectionOfSw.jpg";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export const CardE = props => {
	return (
		<div className="right">
			<Card style={{ width: 18 + "rem" }}>
				<CardImg top width="50%" src={collectionOfSw} />
				<CardBody>
					<CardTitle>
						<div>{props.settings.name}</div>
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
						<i className="fal fa-heart" />
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

CardE.propTypes = {
	settings: PropTypes.object
};
