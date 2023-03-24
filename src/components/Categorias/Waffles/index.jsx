import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardProducto from "../../CardProductos";
import data from "../../../json/productos.json";

const Yogurts = () => {
	const waffles = data.filter((item) => item.route === "waffles");

	const waffleCards = waffles.reduce((acc, item) => {
		const waffleCard = (
			<Link to={`/producto/${item.id}`} key={item.id}>
				<CardProducto nombreProducto={item.nombre} />
			</Link>
		);
		acc.push(waffleCard);
		return acc;
	}, []);

	return (
		<section className='page-section mt-5 mx-auto'>
			<h1 id='titulo-menu'>Waffles</h1>
			<Container className='d-flex flex-column align-items-center'>
				<div>{waffleCards}</div>
			</Container>
		</section>
	);
};

export default Yogurts;
