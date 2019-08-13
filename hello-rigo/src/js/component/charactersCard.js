import React from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { CardHelper } from "../component/cardHelper.js";
import "../../styles/home.scss";

export class CharactersCard extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card-deck">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.characters.map((item, index) => {
								let props = {
									name: item.name,
									gender: item.gender,
									eyeColor: item.eye_color,
									hairColor: item.hair_color
								};
								return <CardHelper key={index} settings={props} />;
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
