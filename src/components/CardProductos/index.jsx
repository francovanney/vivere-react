import LazyLoad from "react-lazyload";
import { goToTop } from "../Utils/goToTop";

const CardProducto = ({ nombreProducto, imgCategoria }) => {
	return (
		<div className='categoria' onClick={goToTop}>
			<LazyLoad height={200} once className='d-flex'>
				<img id='iconos' src={imgCategoria} alt='' />
			</LazyLoad>
			<h3>{nombreProducto}</h3>
			<button>
				<i className='fas fa-chevron-right'>{">"}</i>
			</button>
		</div>
	);
};

export default CardProducto;
