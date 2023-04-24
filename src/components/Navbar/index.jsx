import { Container } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MediaQueries } from "../Utils/mediaqueries";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Col } from "react-bootstrap/esm";
import { goToTop } from "../Utils/goToTop";
import { FaArrowCircleLeft } from "react-icons/fa";

const Navbar = () => {
	const location = useLocation();
	const shouldRenderBackButton = location.pathname !== "/";
	const [scrolled, setScrolled] = useState(false);
	const [expandNavbar, setExpandNavbar] = useState(undefined);
	const [active, setActive] = useState("");
	const { isTabletOrMobile } = MediaQueries();
	const navigate = useNavigate();
	const goToHome = () => {
		navigate("/");
	};

	// SCROLL TO SECTION //

	/* 	const [section, setSection] = useState(null);

	useEffect(() => {
		const sectionElement = document.querySelector(`#${section}`);
		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: "smooth" });
		}
	}, [section]); */

	// SCROLL BAR //
	const onScroll = () => {
		const scrollPosition = window.pageYOffset;
		if (scrollPosition > 10) {
			if (!scrolled) {
				setScrolled(true);
			}
		} else {
			if (scrolled) {
				setScrolled(false);
			}
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [scrolled]);

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	// ACTIVE SECTION //

	/* 	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			sections.forEach((section) => {
				const rect = section.getBoundingClientRect();
				if (
					rect.top <= 200 &&
					rect.bottom > 200 &&
					rect.bottom <=
						(window.innerHeight ||
							document.documentElement
								.clientHeight)
				) {
					setActive(section.id);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleCloseNavbar = () => {
		setExpandNavbar(false);
	}; */

	function handleGoBack() {
		window.history.go(-1);
	}

	return (
		<nav className={"navbar"} id={expandNavbar ? "open" : "close"}>
			<motion.div
				className='progress-bar'
				style={{ scaleX }}
			/>
			{isTabletOrMobile ? (
				<Container
					style={{
						position: "relative",
						paddingLeft: "0px"
					}}>
					{shouldRenderBackButton && (
						<button
							id='goback-button'
							onClick={handleGoBack}
							style={{
								position: "absolute",
								left: 10
							}}>
							{'<'}
						</button>
					)}
					<Col className='d-flex justify-content-center'>
						<img
							id='logo-up'
							width={30}
							src='https://raw.githubusercontent.com/francovanney/vivere-react/gh-pages/LogoVivere/LogoVivereSolo.png'
							alt=''
							onClick={goToHome}
						/>
						<img
							id='logo-down'
							width={100}
							src='https://raw.githubusercontent.com/francovanney/vivere-react/gh-pages/LogoVivere/Logo-Down.png'
							alt=''
							onClick={goToHome}
						/>
					</Col>
				</Container>
			) : (
				<>
					<Link to={"/"}>
						<div className='container-logo'>
							<img
								id='logo-up'
								src={
									"https://raw.githubusercontent.com/francovanney/vivere-react/gh-pages/LogoVivere/LogoVivereSolo.png"
								}
								alt=''
							/>
							<img
								id='logo-down'
								src={
									"https://raw.githubusercontent.com/francovanney/vivere-react/gh-pages/LogoVivere/Logo-Down.png"
								}
								alt=''
							/>
						</div>
					</Link>
					<div className='links'>
						<Link
							to={"/"}
							className={
								active ===
								"header-section"
									? "active"
									: ""
							}
							onClick={goToTop}>
							Inicio
						</Link>
						<Link
							to={"/yogurts"}
							className={
								active ===
								"hola-section"
									? "active"
									: ""
							}
							onClick={goToTop}>
							Yogurts
						</Link>
						<Link
							to={"/waffles"}
							className={
								active ===
								"skills-section"
									? "active"
									: ""
							}
							onClick={goToTop}>
							Waffles
						</Link>
						<Link
							to={"/batidos"}
							className={
								active ===
								"experience-section"
									? "active"
									: ""
							}
							onClick={goToTop}>
							Batidos
						</Link>
						<Link
							to={"/combos"}
							className={
								active ===
								"contact-section"
									? "active"
									: ""
							}
							onClick={goToTop}>
							Combos
						</Link>
						<Link
							to={"/delivery"}
							className={
								active ===
								"contact-section"
									? "active"
									: ""
							}
							onClick={goToTop}>
							Delivery
						</Link>
					</div>
				</>
			)}
		</nav>
	);
};

export default Navbar;
