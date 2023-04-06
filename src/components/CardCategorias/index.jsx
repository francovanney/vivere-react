import React from "react";
import { Link } from "react-router-dom";
import { goToTop } from "../Utils/goToTop";

useEffect(() => {
	goToTop();
}, []);

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
