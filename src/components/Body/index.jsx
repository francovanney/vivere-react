import { Container } from "react-bootstrap";
import data from "../../json/productos.json";
import CardCategorias from "../CardCategorias";

const Body = () => {
	const sections = data.reduce((acc, item) => {
		if (!acc[item.seccion]) {
			acc[item.seccion] = [item];
		} else {
			acc[item.seccion].push(item);
		}
		return acc;
	}, {});

	const sectionArrays = Object.values(sections);

	return (
		<>
			<section className='page-section mt-5 mx-auto'>
				<Container className='d-flex flex-column align-items-center'>
					<h1>Menú</h1>
					{sectionArrays.map((sectionArray) => (
						<div key={data.id}>
							<CardCategorias
								nombreCategoria={
									sectionArray[0]
										.seccion
								}
								hrefCategoria={`/${sectionArray[0].route}`}
							/>
						</div>
					))}
				</Container>
			</section>
		</>
	);
};

export default Body;
