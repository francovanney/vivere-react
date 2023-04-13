import LazyLoad from "react-lazyload";
import { goToTop } from "../Utils/goToTop";
import { useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const CardProducto = ({ nombreProducto, imgCategoria }) => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
	return (
		<div className='categoria'>
			<LazyLoad height={200} once className='d-flex'>
				<img id='iconos' src={imgCategoria} alt='' />
			</LazyLoad>
			<h3>{nombreProducto}</h3>
			<button>
				<FaArrowCircleRight size='20px' />
			</button>
		</div>
	);
};

export default CardProducto;
