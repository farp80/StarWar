import React from "react";
import fidelity from "../../img/unnamed.jpg";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

export const CardE = () => {
	return (
		<div>
			<Card style={{ width: 18 + "rem" }}>
				<CardImg top width="100%" src={fidelity} />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card content.
					</CardText>
					<Button color="primary">Learn more!</Button>
				</CardBody>
			</Card>
		</div>
	);
};
