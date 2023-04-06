import { useEffect } from "react";
import { Container } from "react-bootstrap";
import data from "../../json/productos.json";
import CardCategorias, { goToTop } from "../CardCategorias";
import LogoVivere from "/Logos/logo_main_J22.png";
import LazyLoad from "react-lazyload";

const Body = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	});

	const sections = data.reduce((acc, item) => {
		if (!acc[item.seccion]) {
			acc[item.seccion] = [item];
		} else {
			acc[item.seccion].push(item);
		}
		return acc;
	}, {});

	const sectionArrays = Object.values(sections);

	return (
		<>
			<section className='page-section mt-5 mx-auto'>
				<Container className='d-flex flex-column align-items-center'>
					<Container className='mb-5'>
						<div id='main-header'>
							<div id='ig-main'>
								<a
									href='https://www.instagram.com/viverebeneok/'
									target='_blank'>
									<i className='fab fa-instagram fa-3x'></i>
								</a>
							</div>
							<div
								id='circulo'
								className='animate__animated animate__fadeIn animate__faster'>
								<LazyLoad
									className='d-flex'
									height={
										900
									}
									once>
									<img
										src={
											LogoVivere
										}
										alt=''
										id='logo-circulo'
									/>
								</LazyLoad>
							</div>
						</div>
					</Container>
					<h1 id='titulo-MainMenu'>Menú</h1>
					{sectionArrays.map((sectionArray) => (
						<div key={sectionArray[0].id}>
							<CardCategorias
								nombreCategoria={
									sectionArray[0]
										.seccion
								}
								hrefCategoria={`/${sectionArray[0].route}`}
								categoriaImg={
									sectionArray[0]
										.categoriaImg
								}
								onClick={
									goToTop
								}
							/>
						</div>
					))}
					<CardCategorias
						nombreCategoria={"Gustos"}
						hrefCategoria={"/gustos"}
						categoriaImg={
							"https://raw.githubusercontent.com/francovanney/vivere-react/gh-pages/CategoriaImg/gustosIcon.jpg"
						}
						onClick={goToTop}
					/>
					<CardCategorias
						nombreCategoria={
							"Recomendaciones"
						}
						hrefCategoria={
							"/recomendaciones"
						}
						categoriaImg={
							"https://raw.githubusercontent.com/francovanney/vivere-react/gh-pages/CategoriaImg/recomendacionesIcon.png"
						}
						onClick={goToTop}
					/>
				</Container>
			</section>
		</>
	);
};

export default Body;
