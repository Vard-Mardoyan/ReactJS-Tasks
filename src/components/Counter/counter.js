import React from "react";

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			inpValue: "",
			stepBy: 1,
			min: 0,
			max: 0,
		};
	}

	handleMinVal = (e) => {
		this.setState({
			min: Number(e.target.value),
		});
	};
	handleMaxVal = (e) => {
		this.setState({
			max: e.target.value === "" ? e.target.value : Number(e.target.value),
		});
	};

	handleIncrement = () => {
		let count =
			this.state.max === 0
				? this.state.count + this.state.stepBy
				: Math.min(this.state.max, this.state.count + this.state.stepBy);
		this.setState({ count });
	};
	handleDecrement = () => {
		let count = Math.max(this.state.min, this.state.count - this.state.stepBy);
		this.setState({ count });
	};

	handleInputUpdate = (e) => {
		this.setState({
			stepBy: Number(e.target.value),
		});
	};

	handleReset = () => {
		let count = 0;
		let min = 0;
		let max = 0;
		let inpValue = "";

		this.setState({ count, min, max, inpValue });
	};

	render() {
		console.log(this.state.count);

		return (
			<div>
				<p>
					Counte:
					{this.state.count}
				</p>
				<input type="number" onChange={this.handleInputUpdate} />
				<button onClick={this.handleIncrement}>+</button>
				<button onClick={this.handleDecrement}>-</button>
				<button onClick={this.handleReset}>Reset</button>

				<p>Min: {this.state.min}</p>
				<input
					value={this.state.min}
					type="number"
					onChange={this.handleMinVal}
				/>
				<p>Max: {this.state.max}</p>
				<input
					value={this.state.max}
					type="number"
					onChange={this.handleMaxVal}
				/>
			</div>
		);
	}
}
export default Counter;
