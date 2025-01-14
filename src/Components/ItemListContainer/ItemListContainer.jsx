import "./ItemListContainer.css";
import fetchSimulation from "../../FetchSimulation";
import CardItems from "../CardItems/CardItems";
import products from "../Products/products";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
	const [data, SetData] = useState([]);
	let { idCategory } = useParams();

	useEffect(() => {
		if (idCategory === undefined) {
			fetchSimulation(products, 2000)
				.then((response) => SetData(response))
				.catch((error) => console.log(error));
		} else {
			fetchSimulation(
				products.filter((filter) => filter.category == idCategory)
			)
				.then((response) => SetData(response))
				.catch((error) => console.log(error));
		}
	}, [idCategory]);

	return (
		<>
			<Container>
				{data.map((products) => (
					<CardItems
						key={products.id}
						id={products.id}
						imagen={products.imagen}
						nombre={products.title}
						category={products.category}
						precio={products.price}
					/>
				))}
			</Container>
		</>
	);
};
export default ItemListContainer;