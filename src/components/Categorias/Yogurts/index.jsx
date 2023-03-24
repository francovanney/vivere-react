import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardProducto from "../../CardProductos";
import data from "../../../json/productos.json";

const Yogurts = () => {
	const yogurts = data.filter((item) => item.route === "yogurts");

	const yogurtCards = yogurts.reduce((acc, item) => {
		const yogurtCard = (
			<Link to={`/producto/${item.id}`} key={item.id}>
				<CardProducto nombreProducto={item.nombre} />
			</Link>
		);
		acc.push(yogurtCard);
		return acc;
	}, []);

	return (
		<section className='page-section mt-5 mx-auto'>
			<h1 id='titulo-menu'>Yogurts Helados</h1>
			<Container className='d-flex flex-column align-items-center'>
				<div>{yogurtCards}</div>
			</Container>
		</section>
	);
};

export default Yogurts;
