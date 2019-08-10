import React from "react";
import "../../styles/home.scss";
import { Card } from "../component/card.js";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="row">
					<div className="column">
						<Context.Consumer>
							{({ store }) => {
								console.log(store.characters);
								console.log(store.planets);
								return <Card />;
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}
