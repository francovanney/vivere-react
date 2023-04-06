import React from "react";
import { Link } from "react-router-dom";

export const goToTop = () => {
	window.scrollTo({
		top: 0, // Posición de scroll en el eje Y
		left: 0, // Posición de scroll en el eje X
		behavior: "smooth" // Animación suave
	});
};

const CardCategorias = ({ nombreCategoria, hrefCategoria, categoriaImg }) => {
	const imagenCategoria = categoriaImg;

	return (
		<Link to={hrefCategoria}>
			<div className='categoria' onClick={goToTop}>
				<img
					id='iconos'
					src={imagenCategoria}
					alt={nombreCategoria}
				/>
				<h4>{nombreCategoria}</h4>
				<button>
					<i className='fas fa-chevron-right'>
						{">"}
					</i>
				</button>
			</div>
		</Link>
	);
};

export default CardCategorias;
