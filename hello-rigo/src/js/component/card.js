import React from "react";
import fidelity from "../../img/unnamed.jpg";

export const Card = () => (
	<div className="card" style={{ width: 18 + "rem" }}>
		<img className="card-img-top" src={fidelity} alt="Card image cap" />
		<div className="card-body">
			<h5 className="card-title">Card title</h5>
			<p className="card-text">FIDEL</p>
			<a href="#" className="btn btn-primary">
				GO
			</a>
		</div>
	</div>
);
