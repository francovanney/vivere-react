import { Nav } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MediaQueries } from "../Utils/mediaqueries";
import { Link } from "react-router-dom";

// GO TO TOP //

export const goToTop = () => {
	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [expandNavbar, setExpandNavbar] = useState(undefined);
	const [active, setActive] = useState("");
	const { isTabletOrMobile } = MediaQueries();

	// SCROLL TO SECTION //

	const [section, setSection] = useState(null);

	useEffect(() => {
		const sectionElement = document.querySelector(`#${section}`);
		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: "smooth" });
		}
	}, [section]);

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

	useEffect(() => {
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
	};

	return (
		<nav
			activeKey='/'
			className={scrolled ? "scrolled-down navbar" : "navbar"}
			id={expandNavbar ? "open" : "close"}>
			<div className='container-logo'>
				{/* <img src={logo} width={35} id='Logo' /> */}
			</div>
			<motion.div
				className='progress-bar'
				style={{ scaleX }}
			/>
			{isTabletOrMobile ? (
				<div className='links'>
					<div className='toggleButton'>
						<button
							onClick={() => {
								setExpandNavbar(
									(
										prev
									) =>
										!prev
								);
							}}>
							{expandNavbar
								? "X"
								: "O"}
						</button>
					</div>
					<Nav.Link
						className={
							active ===
							"header-section"
								? "active"
								: ""
						}
						onClick={() => {
							handleCloseNavbar();
							setSection(
								"header-section"
							);
							goToTop();
						}}>
						Inicio
					</Nav.Link>
					<Nav.Link
						className={
							active ===
							"hola-section"
								? "active"
								: ""
						}
						onClick={() => {
							handleCloseNavbar();
							setSection(
								"hola-section"
							);
							goToTop();
						}}>
						2
					</Nav.Link>
					<Nav.Link
						className={
							active ===
							"skills-section"
								? "active"
								: ""
						}
						onClick={() => {
							handleCloseNavbar();
							setSection(
								"skills-section"
							);
							goToTop();
						}}>
						s
					</Nav.Link>
					<Nav.Link
						className={
							active ===
							"experience-section"
								? "active"
								: ""
						}
						onClick={() => {
							handleCloseNavbar();
							setSection(
								"experience-section"
							);
							goToTop();
						}}>
						3
					</Nav.Link>
					<Nav.Link
						className={
							active ===
							"contact-section"
								? "active"
								: ""
						}
						onClick={() => {
							handleCloseNavbar();
							setSection(
								"contact-section"
							);
							goToTop();
						}}>
						4
					</Nav.Link>
				</div>
			) : (
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
			)}
		</nav>
	);
};

export default Navbar;
