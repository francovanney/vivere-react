import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import { goToTop } from "../Navbar";

const CardCategorias = ({ nombreCategoria, hrefCategoria, categoriaImg }) => {
	const imagenCategoria = categoriaImg;

	return (
		<div onClick={goToTop}>
			<Link to={hrefCategoria}>
				<div className='categoria'>
					<LazyLoad
						height={200}
						once
						className='d-flex'>
						<img
							id='iconos'
							src={imagenCategoria}
							alt={nombreCategoria}
						/>
					</LazyLoad>
					<h4>{nombreCategoria}</h4>
					<button>
						<i className='fas fa-chevron-right'>
							{">"}
						</i>
					</button>
				</div>
			</Link>
		</div>
	);
};

export default CardCategorias;
