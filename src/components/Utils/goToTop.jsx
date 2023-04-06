export const goToTop = () => {
	window.scrollTo({
		top: 0, // Posición de scroll en el eje Y
		left: 0, // Posición de scroll en el eje X
		behavior: "smooth" // Animación suave
	});
};
