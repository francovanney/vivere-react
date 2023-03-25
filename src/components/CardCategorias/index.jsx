import { Link } from "react-router-dom";
import { goToTop } from "../Navbar";
import data from '../../json/productos.json'
import YogurtIcon from "../../assets/SubNavIcons/yogurtsIcon.png";
import WafflesIcon from "../../assets/SubNavIcons/wafflesIcon.png";

const CardCategorias = ({ nombreCategoria, hrefCategoria, imgCategoria }) => {
	return (
		<div onClick={goToTop}>
			<Link to={hrefCategoria}>
				<div className='categoria'>
					<img
						id='iconos'
						src={YogurtIcon}
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
