import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardProducto from "../../CardProductos";
import data from "../../../json/productos.json";

const BatidosYLicuados = () => {
	const batidos = data.filter((item) => item.route === "batidos");

	const batidosCards = batidos.reduce((acc, item) => {
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
			<Container className='d-flex flex-column align-items-center'>
				<div>
					<h1>Batidos Y Licuados</h1>
					{batidosCards}
				</div>
			</Container>
		</section>
	);
};

export default BatidosYLicuados;
