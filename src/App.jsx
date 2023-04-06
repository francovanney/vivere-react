import { useEffect, useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Body from "./components/Body";
import BatidosYLicuados from "./components/Categorias/BatidosYLicuados";
import Combos from "./components/Categorias/Combos";
import Delivery from "./components/Categorias/Delivery";
import Gustos from "./components/Categorias/Gustos";
import Recomendaciones from "./components/Categorias/Recomendaciones";
import Waffles from "./components/Categorias/Waffles";
import Yogurts from "./components/Categorias/Yogurts";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Producto from "./components/Producto";
import { goToTop } from "./components/CardCategorias";

const App = () => {
	const [loading, setLoading] = useState(false);

	// Uncomment to implement Loader Screen on init //

	/* 	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []); */

	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Body />} />
				<Route
					path='/yogurts'
					element={<Yogurts />}
					onClick={goToTop}
				/>
				<Route
					path='/waffles'
					element={<Waffles />}
					onClick={goToTop}
				/>
				<Route
					path='/batidos'
					element={<BatidosYLicuados />}
					onClick={goToTop}
				/>
				<Route
					path='/delivery'
					element={<Delivery />}
					onClick={goToTop}
				/>
				<Route
					path='/gustos'
					element={<Gustos />}
					onClick={goToTop}
				/>
				<Route
					path='/recomendaciones'
					element={<Recomendaciones />}
					onClick={goToTop}
				/>
				<Route
					path='/combos'
					element={<Combos />}
					onClick={goToTop}
				/>
				<Route
					path='/producto/:id'
					element={<Producto />}
					onClick={goToTop}
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
