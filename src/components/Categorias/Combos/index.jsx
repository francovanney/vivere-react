import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardProducto from "../../CardProductos";
import data from "../../../json/productos.json";
import SubNav from "../../SubNav";

const Combos = () => {
	const combos = data.filter((item) => item.route === "combos");

	const comboCards = combos.reduce((acc, item) => {
		const batidoCard = (
			<Link to={`/producto/${item.id}`} key={item.id}>
				<CardProducto
					nombreProducto={item.nombre}
					imgCategoria={item.urlImagen}
				/>
			</Link>
		);
		acc.push(batidoCard);
		return acc;
	}, []);

	return (
		<section className='page-section mx-auto'>
			<SubNav
				nombreCategoria={"Combos"}
				imgCategoria={
					"https://raw.githubusercontent.com/francovanney/vivere-react/gh-pages/CategoriaImg/deliveryIcon.png"
				}
			/>
			<h1 id='titulo-menu'>Combos</h1>
			<Container className='d-flex flex-column align-items-center'>
				<div>{comboCards}</div>
			</Container>
		</section>
	);
};

export default Combos;
