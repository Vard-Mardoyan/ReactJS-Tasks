import React, { useEffect, useState } from "react";
import "./museum.css";

export default function Museum() {
	const [items, setItems] = useState([]);
	const [pagination, setPagination] = useState(10);
	const [errors, setErrors] = useState(null);
	const [loading, setLoading] = useState(true);

	const BASE_URL =
		"https://harvardartmuseums.org/browse?load_amount=30&offset=12";
	useEffect(() => {
		fetch(BASE_URL)
			.then((res) => res.json())
			.then((data) => {
				setItems(data.records);
				setLoading(false);
			})
			.catch((err) => setErrors(err));
	}, []);
	console.log(items);

	const showMoreItems = () => {
		setPagination((prevState) => prevState + 10);
	};

	if (loading) return <div>Loading...</div>;

	return (
		<div className='museumContainer'>
			<ul className="dataContainer">
				{items.slice(0, pagination).map((item, id) => {
					return (
						<li className="dataGrid" key={id}>
							<img
								className="img"
								src={item.primaryimageurl}
								alt={"museum images"}
							/>
							<p>M{item.id}</p>
							<p> {item.title}</p>
							<p> Culture {item.culture} </p>
							<p> {item.copyright}</p>
							<p> {item.division}</p>
						</li>
					);
				})}
				<button className="load_more_btn" onClick={showMoreItems}>
					Load more
				</button>
			</ul>
		</div>
	);
}
