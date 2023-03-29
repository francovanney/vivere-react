import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import productos from "../../json/productos.json";
import SubNav from "../SubNav";
import { goToTop } from "../Navbar";

const Producto = () => {
	const { id } = useParams();
	const producto = productos.find((p) => p.id === parseInt(id));

	return (
		<section className='page-section' onClick={goToTop}>
			<SubNav
				nombreCategoria={
					producto.seccion +
					" - " +
					producto.nombre
				}
				isProduct={true}
			/>
			<Container className='d-flex align-items-center justify-content-center mt-5'>
				<Card id='card' style={{ width: "18rem" }}>
					<Card.Img
						variant='top'
						src={producto.urlImagen}
					/>
					<Card.Body>
						<Container className='px-0 d-flex align-items-center justify-content-between'>
							<Card.Title id='card-title'>
								{
									producto.nombre
								}
							</Card.Title>
							<Card.Text id='card-price'>
								{
									producto.precio
								}
							</Card.Text>
						</Container>
						<Card.Text id='card-description'>
							{producto.descripcion}
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		</section>
	);
};

export default Producto;
