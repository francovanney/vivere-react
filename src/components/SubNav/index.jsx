import LazyLoad from "react-lazyload";

const SubNav = ({ nombreCategoria, imgCategoria, isProduct = false }) => {
	return (
		<>
			{isProduct ? (
				<section id='titulo'>
					<h1 className='titleSubNav'>
						{nombreCategoria}
					</h1>
				</section>
			) : (
				<section id='titulo'>
					<LazyLoad height={200} once>
						<img
							id='iconos-ind'
							src={imgCategoria}
							alt=''
						/>
					</LazyLoad>
					<h1 className='titleSubNav'>
						{nombreCategoria}
					</h1>
					<ul id='direcciones'>
						<li>
							Roque Sáenz Peña 177
							(Junín)
						</li>
						<li>
							Av Mitre 1372 (9 de
							Julio)
						</li>
						<li>
							Av de Mayo 461
							(Pergamino)
						</li>
					</ul>
				</section>
			)}
		</>
	);
};

export default SubNav;
