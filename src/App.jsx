import { useEffect, useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Body from "./components/Body";
import BatidosYLicuados from "./components/Categorias/BatidosYLicuados";
import Delivery from "./components/Categorias/Delivery";
import Waffles from "./components/Categorias/Waffles";
import Yogurts from "./components/Categorias/Yogurts";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Producto from "./components/Producto";

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
			<>
				<Navbar />
				<Routes>
					<Route path='/' element={<Body />} />
					<Route
						path='/yogurts'
						element={<Yogurts />}
					/>
					<Route
						path='/waffles'
						element={<Waffles />}
					/>
					<Route
						path='/batidos'
						element={<BatidosYLicuados />}
					/>
					<Route
						path='/delivery'
						element={<Delivery />}
					/>
					<Route
						path='/producto/:id'
						element={<Producto />}
					/>
				</Routes>
				<Footer />
			</>
		</div>
	);
};

export default App;
