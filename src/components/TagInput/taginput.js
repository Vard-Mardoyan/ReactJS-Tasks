import React, { useState } from "react";
import "./taginput.css";

export default function Xachapuri() {
	const [tags, setTags] = useState(["please", "do not"]);
	const addTag = (e) => {
		if (e.key === "Enter") {
			if (e.target.value.length > 0) {
				setTags([...tags, e.target.value]);
				e.target.value = "";
			}
		}
	};
	const removeTag = (removedTag) => {
		const newTags = tags.filter((tag) => tag !== removedTag);
		setTags(newTags);
	};
	return (
		<div>
			<h1>Tags input with React</h1>
			<div className="tag-container">
				{tags.map((tag, index) => {
					return (
						<div key={index} className="tag">
							{tag}{" "}
							<button className="tagBtn" onClick={() => removeTag(tag)}>
								x
							</button>
						</div>
					);
				})}

				<input onKeyDown={addTag} />
			</div>
		</div>
	);
}
