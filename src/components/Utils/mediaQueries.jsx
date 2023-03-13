import { useMediaQuery } from "react-responsive";

export const MediaQueries = () => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

	return {
		isTabletOrMobile
	};
};
