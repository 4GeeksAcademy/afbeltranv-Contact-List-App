import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
		<form>
			<div className="mb-3">
				<label for="exampleInputEmail1" className="form-label">Full Name</label>
				<input type="text" className="form-control" id="Name" aria-describedby="Name" placeholder="Full Name"/>				
			</div>

			<div className="mb-3">
				<label for="exampleInputEmail1" className="form-label">Email address</label>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
				<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
			</div>

			<div className="mb-3">
				<label for="exampleInputPassword1" className="form-label">Phone</label>
				<input type="number" className="form-control" id="Phone"/>
			</div>
			
			<div className="mb-3">
				<label for="exampleInputPassword1" className="form-label">Address</label>
				<input type="text" className="form-control" id="Address"/>
			</div>		
			
			<button type="submit" className="btn btn-primary">Save</button>
		</form>
		</div>
	);
};
