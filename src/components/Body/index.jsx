import { Card, Container } from "react-bootstrap";
import CategoriasPrincipales from "./CategoriasPrincipales";

const Body = () => {
	return (
		<>
			<section className='page-section mt-5 mx-auto'>
				<Container className='d-flex flex-column align-items-center'>
					<h1>Menú</h1>
					<CategoriasPrincipales />
				</Container>
			</section>
		</>
	);
};

export default Body;
