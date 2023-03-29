import { useMediaQuery } from "react-responsive";

export const MediaQueries = () => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });

	return {
		isTabletOrMobile
	};
};
