import React, { useState } from "react";
import "./slider.css";

export default function Slider(props) {
	const [hue, setHue] = useState(props.randomHue);
	const [saturation, setSaturation] = useState(props.randomSaturation);
	const [lightness, setLightness] = useState(props.randomLightness);
	const [alpha, setAlpha] = useState(1);

	const randomColor = () => {
		setHue(Math.ceil(Math.random() * 360));
		setSaturation(Math.ceil(Math.random() * 100));
		setLightness(Math.ceil(Math.random() * 100));
		setAlpha(1);
	};

	console.log({ alpha });
	return (
		<>
			<main className="main-container">
				<button className='randomBtn' onClick={() => randomColor()}>Random color</button>
				<div className="color-container">
					<section
						className="color-area"
						style={{
							backgroundColor: `hsl(${hue},${saturation}%,${lightness}%, ${alpha})`,
						}}
					/>
				</div>

				<div>
					<section>
						<p>H: {hue}</p>
						<input
							type="range"
							min="1"
							max="360"
							value={hue}
							onChange={(e) => setHue(e.target.value)}
						/>
					</section>
					<section>
						<p>S: {saturation}%</p>
						<input
							type="range"
							min="1"
							max="100"
							value={saturation}
							onChange={(e) => setSaturation(e.target.value)}
						/>
					</section>
					<section>
						<p>L: {lightness}%</p>
						<input
							type="range"
							min="1"
							max="100"
							value={lightness}
							onChange={(e) => setLightness(e.target.value)}
						/>
					</section>
					<section>
						<p>A: {alpha}</p>
						<input
							type="range"
							min="0"
							max="1"
							step="0.01"
							value={alpha}
							onChange={(e) => setAlpha(e.target.value)}
						/>
					</section>
				</div>
			</main>
		</>
	);
}
