// GO TO TOP //

export const goToTop = () => {
	if (window.scroll) {
		window.scroll(0, 0);
	} else {
		window.scrollTo(0, 0);
	}
};
