import { Link } from "react-router-dom";
import { goToTop } from "../Navbar";

const CardCategorias = ({ nombreCategoria, hrefCategoria }) => {
	return (
		<div onClick={goToTop}>
			<Link to={hrefCategoria}>
				<div className='categoria'>
					<img
						id='iconos'
						src='/img/yogurts.png'
						alt=''
					/>
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
