import React from "react";
import fidelity from "../../img/unnamed.jpg";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import PropTypes from "prop-types";

export const CardE = props => {
	return (
		<div>
			<Card style={{ width: 18 + "rem" }}>
				<CardImg top width="100%" src={fidelity} />
				<CardBody>
					<CardTitle>{(name = props.name)}</CardTitle>
					<CardText>
						<p>{(gender = props.gender)}</p>
						<p>{(eyeColor = props.eyeColor)}</p>
						<p>{(hairColor = props.hairColor)}</p>
					</CardText>
					<Button color="primary">Learn more!</Button>
				</CardBody>
			</Card>
		</div>
	);
};

CardE.propTypes = {
	name: PropTypes.string,
	eyeColor: PropTypes.string,
	hairColor: PropTypes.string,
	gender: PropTypes.string
};
