import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Jumbotron, Button } from "reactstrap";
import { Card, CardImg } from "reactstrap";
import "../../styles/home.scss";

export class SinglePlanet extends React.Component {
	render() {
		return (
			<div className="top">
				<div className="container">
					<Context.Consumer>
						{({ store }) => {
							return (
								<div>
									<div className="row">
										<div className="col-4">
											<img src="//placehold.it/200" alt="" width="250px" height="250px" />
										</div>
										<div className="col-6">
											<div className="card-block px-2">
												<h4 className="card-title">
													{store.planets[this.props.match.params.theid].name}
												</h4>
												<p className="card-text">
													{"Carrie Fisher and George Lucas immortalized the character of Princess Leia with this " +
														"\n" +
														"memorable, iconic line. It will forever be synonymous with both Leia and the series" +
														"\n" +
														"as a whole; there’s no telling how many times it’s been referenced or quoted" +
														"\n" +
														"throughout popular culture. Fisher herself famously parodied the line in her" +
														"\n" +
														"Emmy-nominated guest appearance on the sitcom 30 Rock in 2007."}
												</p>
											</div>
										</div>
									</div>
									<div className="top">
										<hr className="my-4" />
									</div>
									<div className="top">
										<div className="row fontCentered">
											<div className="col-2">
												{"Name"}
												<div className="row">
													{store.planets[this.props.match.params.theid].name}
												</div>
											</div>
											<div className="col-2">
												{"Population"}
												<div className="row">
													{store.planets[this.props.match.params.theid].population +
														" aliens"}
												</div>
											</div>
											<div className="col-2">
												{"Terrain"}
												<div className="row">
													{store.planets[this.props.match.params.theid].terrain}
												</div>
											</div>
											<div className="col-2">
												{"Rotation Period"}
												<div className="row">
													{store.planets[this.props.match.params.theid].rotation_period +
														" days"}
												</div>
											</div>
											<div className="col-2">
												{"Diameter"}
												<div className="row">
													{store.planets[this.props.match.params.theid].diameter + " Kms"}
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						}}
					</Context.Consumer>
					<div>
						<Link to="/">
							<span className="btn btn-primary btn-lg" href="#" role="button">
								Back home
							</span>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

SinglePlanet.propTypes = {
	match: PropTypes.object
};
