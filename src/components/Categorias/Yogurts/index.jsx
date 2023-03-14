import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardCategorias from "../../CardCategorias";
import CardProducto from "../../CardProductos";

const Yogurts = () => {
	return (
		<section className='page-section mt-5 mx-auto'>
			<Container className='d-flex flex-column align-items-center'>
				<div>
					<h1>Yogurts SUB CAT</h1>
					<Link to='/producto/1'>
						<CardProducto nombreProducto='Yogurt 1 state' />
					</Link>
					<Link to='/producto/2'>
						<CardProducto nombreProducto='Yogurt 2 state' />
					</Link>
				</div>
			</Container>
		</section>
	);
};

export default Yogurts;
