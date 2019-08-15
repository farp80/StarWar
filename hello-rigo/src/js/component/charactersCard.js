import React from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { CardHelper } from "../component/cardHelper.js";
import "../../styles/home.scss";
import collectionOfSw from "../../img/collectionOfSw.jpg";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Link } from "react-router-dom";

export class CharactersCard extends React.Component {
	render() {
		return (
			<div className="container container-scroll">
				<div className="card-deck">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.characters.map((item, index) => {
								return (
									<div key={index}>
										<Card key={index} style={{ width: 18 + "rem" }}>
											<CardImg top width="50%" src={collectionOfSw} />
											<CardBody>
												<CardTitle>
													<div>
														<strong>{item.name}</strong>
													</div>
												</CardTitle>
												<CardText>
													<div>
														<div>{"Gender: " + item.gender}</div>
														<div>{"Eye Color: " + item.eyeColor}</div>
														<div>{"Hair Color: " + item.hairColor}</div>
													</div>
												</CardText>
												<Link to={"/single/" + index}>
													<Button color="primary">{"Learn more!"}</Button>
												</Link>
												<div className="favorite">
													<i
														className="far fa-heart"
														onClick={() => actions.addFavorite(item.name, index)}
													/>
												</div>
											</CardBody>
										</Card>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
