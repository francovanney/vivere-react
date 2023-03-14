const CardProducto = ({ nombreProducto }) => {
	return (
		<div>
			<div className='categoria'>
				<img
					id='iconos'
					src='/img/yogurts.png'
					alt=''
				/>
				<h3>{nombreProducto}</h3>
				<button>
					<i className='fas fa-chevron-right'></i>
				</button>
			</div>
		</div>
	);
};

export default CardProducto;
