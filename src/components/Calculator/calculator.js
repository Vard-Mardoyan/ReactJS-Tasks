import React, { useEffect, useState } from "react";
import "./calculator.css";

export default function Calculator() {
	const [firstvalue, setFirstValue] = useState("");
	const [secondvalue, setSecondValue] = useState("");
	const [totalvalue, setTotalValue] = useState([]);

	function handleAddBtn() {
		setTotalValue(Number(firstvalue + secondvalue));
	}
	function handleDivideBtn() {
		setTotalValue(Number(firstvalue / secondvalue));
	}
	function handleMulBtn() {
		setTotalValue(Number(firstvalue * secondvalue));
	}
	function handleSubtractBtn() {
		setTotalValue(Number(firstvalue - secondvalue));
	}
	function handleClearBtn() {
		setFirstValue("");
		setSecondValue("");
		setTotalValue([]);
	}
	console.log({ totalvalue });

	return (
		<div>
			<div className="calcContainer">
				<h2>Value: {totalvalue}</h2>
				<input
					className="inp"
					placeholder="first value"
					value={firstvalue}
					name="firstValue"
					type="number"
					onChange={(e) => {
						setFirstValue(+e.target.value);
					}}
				/>
				<input
					className="inp"
					placeholder="second value"
					value={secondvalue}
					name="secondValue"
					type="number"
					onChange={(e) => {
						setSecondValue(+e.target.value);
					}}
				/>
				<div className="wrapper">
					<button className="actionBtn" onClick={handleAddBtn}>
						add
					</button>
					<button className="actionBtn" onClick={handleSubtractBtn}>
						subtract
					</button>
					<button className="actionBtn" onClick={handleDivideBtn}>
						divide
					</button>
					<button className="actionBtn" onClick={handleMulBtn}>
						multiply
					</button>
					<button className="actionBtn" onClick={handleClearBtn}>
						clear
					</button>
				</div>
			</div>
		</div>
	);
}
