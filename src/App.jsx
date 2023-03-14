import { useEffect, useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Body from "./components/Body";
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
						path='/producto/:id'
						element={<Producto />}
					/>
				</Routes>
			</>
		</div>
	);
};

export default App;
