import { Link } from "react-router-dom";

const CardCategorias = ({ nombreCategoria, hrefCategoria }) => {
	return (
		<div>
			<Link to={hrefCategoria}>
				<div className='categoria'>
					<img
						id='iconos'
						src='/img/yogurts.png'
						alt=''
					/>
					<h3>{nombreCategoria}</h3>
					<button>
						<i className='fas fa-chevron-right'></i>
					</button>
				</div>
			</Link>
		</div>
	);
};

export default CardCategorias;
