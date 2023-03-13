import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardCategorias from "../../CardCategorias";

const Yogurts = () => {
	return (
		<section className='page-section mt-5 mx-auto'>
			<Container className='d-flex flex-column align-items-center'>
				<div>
					<h1>Yogurts SUB CAT</h1>
					<Link to='yogurt1'>
						<CardCategorias
							nombreCategoria='Yogurt 1'
							hrefCategoria='/Yogurt1'
						/>
					</Link>
					<Link to='yogurt2'>
						{" "}
						<CardCategorias
							nombreCategoria='Yogurt 2'
							hrefCategoria='/Yogurt2'
						/>
					</Link>
					<Link to='yogurt3'>
						{" "}
						<CardCategorias
							nombreCategoria='Yogurt 3'
							hrefCategoria='/Yogurt3'
						/>
					</Link>
					<Link to='yogurt4'>
						{" "}
						<CardCategorias
							nombreCategoria='Yogurt 4'
							hrefCategoria='/Yogurt4'
						/>
					</Link>
					<Link to='yogurt5'>
						{" "}
						<CardCategorias
							nombreCategoria='Yogurt 5'
							hrefCategoria='/Yogurt5'
						/>
					</Link>
					<Link to='yogurt6'>
						{" "}
						<CardCategorias
							nombreCategoria='Yogurt 6'
							hrefCategoria='/Yogurt6'
						/>
					</Link>
				</div>
			</Container>
		</section>
	);
};

export default Yogurts;
