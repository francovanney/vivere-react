import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CardCategorias = ({ nombreCategoria, hrefCategoria, categoriaImg }) => {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	});
	const imagenCategoria = categoriaImg;

	return (
		<Link to={hrefCategoria}>
			<div className='categoria'>
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
