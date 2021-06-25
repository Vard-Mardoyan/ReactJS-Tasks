import React from "react";
import "./userinfo.css";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {
				firstName: "",
				lastName: "",
				email: "",
				phoneNumber: "",
			},
			errors: {
				firstName: "",
				lastName: "",
				email: "",
				phoneNumber: "",
			},
		};
	}

	userInfo = (name, value) => {
		const { fields } = this.state;
		switch (name) {
			case "firstName":
				if (!value || value.trim() === "") {
					return "First name is Required";
				} else if (!value.match("[a-zA-Z]{3,30}")) {
					return "Please give valid first name";
				} else {
					return "";
				}
			case "lastName":
				if (!value || value.trim() === "") {
					return "Last name is Required";
				} else if (!value.match("[a-zA-Z]{4,30}")) {
					return "Please give valid last name";
				} else {
					return "";
				}
			case "email":
				if (!value) {
					return "Email is Required";
				} else if (
					!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
				) {
					return "Enter a valid email address";
				} else {
					return "";
				}
			case "phoneNumber":
				if (!value || value.trim() === "") {
					return "Phone number is Required";
				} else if (
					!value.match(
						/\+?1?\s*\(?-*\.*(\d{3})\)?\.*-*\s*(\d{3})\.*-*\s*(\d{4})$/
					)
				) {
					return "Enter a valid phone number.";
				} else {
					return "";
				}
			default: {
				return "";
			}
		}
	};

	handleUserInput = (e) => {
		this.setState({
			errors: {
				...this.state.errors,
				[e.target.name]: this.userInfo(e.target.name, e.target.value),
			},
			fields: {
				...this.state.fields,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleSubmit = (e) => {
		const { fields } = this.state;
		e.preventDefault();
		let validationErrors = {};
		Object.keys(fields).forEach((name) => {
			const error = this.userInfo(name, fields[name]);
			if (error && error.length > 0) {
				validationErrors[name] = error;
			}
		});
		if (Object.keys(validationErrors).length > 0) {
			this.setState({ errors: validationErrors, value: "" });
			return;
		} else {
			fields.firstName = "";
			fields.email = "";
			fields.email = "";
			fields.lastName = "";
			fields.phoneNumber = "";
		}
		if (
			fields.firstName &&
			fields.email &&
			fields.email &&
			fields.lastName &&
			fields.phoneNumber
		) {
			const data = {
				firstName: fields.firstName,
				lastName: fields.lastName,
				email: fields.email,
				phoneNumber: fields.phoneNumber,
			};
			console.log(data);
		}
	};

	render() {
		const { fields, errors } = this.state;
		return (
			<div>
				<div className="border">
					<div>
						<div>
							<label>
								<p>First name:</p>
							</label>
							<input
								className={
									errors.firstName ? "errorBorderRed" : "errorBorderGreen"
								}
								type="text"
								name="firstName"
								value={fields.firstName}
								onChange={(event) => this.handleUserInput(event)}
								placeholder="First Name"
							/>
						</div>
						<div>
							<span className="text-danger">{errors.firstName}</span>
						</div>
					</div>
					<div>
						<div>
							<label>
								<p>Last Name:</p>
							</label>
							<input
								className={
									errors.lastName ? "errorBorderRed" : "errorBorderGreen"
								}
								type="text"
								name="lastName"
								value={fields.lastName}
								onChange={(event) => this.handleUserInput(event)}
								placeholder="Last Name"
							/>
						</div>
						<div>
							<span className="text-danger">{errors.lastName}</span>
						</div>
						<div></div>
						<label>
							<p>Email:</p>
						</label>
						<input
							className={errors.email ? "errorBorderRed" : "errorBorderGreen"}
							type="email"
							name="email"
							value={fields.email}
							onChange={(event) => this.handleUserInput(event)}
							placeholder="Email Address"
						/>
						<div>
							<span className="text-danger">{errors.email}</span>
						</div>
					</div>

					<div>
						<label>
							<p>Phone Number:</p>
						</label>
						<input
							className={
								errors.phoneNumber ? "errorBorderRed" : "errorBorderGreen"
							}
							type="text"
							name="phoneNumber"
							value={fields.phoneNumber}
							onChange={(event) => this.handleUserInput(event)}
							placeholder="Phone number"
						/>
						<div>
							<span className="text-danger">{errors.phoneNumber}</span>
						</div>
					</div>
				</div>
				<br />
				<button
					type="button"
					className="login-button pointer"
					
					onClick={this.handleSubmit}
				>
					Submit
				</button>
			</div>
		);
	}
}
export default LoginForm;
