import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardProducto from "../../CardProductos";
import data from "../../../json/productos.json";

const BatidosYLicuados = () => {
	const delivery = data.filter((item) => item.route === "delivery");

	const deliveryCards = delivery.reduce((acc, item) => {
		const batidoCard = (
			<Link to={`/producto/${item.id}`} key={item.id}>
				<CardProducto nombreProducto={item.nombre} />
			</Link>
		);
		acc.push(batidoCard);
		return acc;
	}, []);

	return (
		<section className='page-section mt-5 mx-auto'>
			<h1 id='titulo-menu'>Delivery</h1>
			<Container className='d-flex flex-column align-items-center'>
				<div>{deliveryCards}</div>
			</Container>
		</section>
	);
};

export default BatidosYLicuados;
