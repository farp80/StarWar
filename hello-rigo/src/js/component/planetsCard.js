import React from "react";
import { Context } from "../store/appContext";
import { CardHelperPlanets } from "../component/cardHelperPlanets.js";
import "../../styles/home.scss";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const learnMore = "Learn more!";
export class PlanetsCard extends React.Component {
	render() {
		return (
			<div className="container container-scroll">
				<div className="card-deck">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.planets.map((item, index) => {
								let props = {
									population: item.population,
									name: item.name,
									terrain: item.terrain,
									index: index
								};
								return <CardHelperPlanets key={index} settings={props} />;
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
