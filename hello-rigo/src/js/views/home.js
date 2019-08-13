import React from "react";
import "../../styles/home.scss";
import { CardE } from "../component/cardE.js";
import { Context } from "../store/appContext";
import { CardGroup } from "reactstrap";
import PropTypes from "prop-types";

export class Home extends React.Component {
	render() {
		return (
			<div className="container ml-5">
				<div className="text-center mt-5">
					<h1 font-color="red">Characters</h1>
				</div>
				<div className="container inlineBlock">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<CardGroup>
									{store.characters.map((item, index) => {
										console.log(item.name + " |" + item.gender);
										let props = {
											name: item.name,
											gender: item.gender,
											eyeColor: item.eye_color,
											hairColor: item.hair_color
										};
										return <CardE key={index} settings={props} />;
									})}
								</CardGroup>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
