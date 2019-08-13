import React from "react";
import "../../styles/home.scss";
import { CharactersCard } from "../component/charactersCard.js";
import { PlanetsCard } from "../component/planetsCard.js";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row text-center mt-5">
					<h1 font-color="red">Characters</h1>
				</div>
				<div className="row">
					<CharactersCard />
				</div>
				<div className="row">
					<div className="row text-center mt-5">
						<h1 font-color="red">Planets</h1>
					</div>
				</div>
				<div className="row">
					<PlanetsCard />
				</div>
			</div>
		);
	}
}
