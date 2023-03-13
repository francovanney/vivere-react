import CardCategorias from "../../CardCategorias";

const CategoriasPrincipales = () => {
	return (
		<section>
			<div>
				<h1>Categorías Principales</h1>
				<CardCategorias
					nombreCategoria='Yogurts Helados'
					hrefCategoria='/yogurts'
				/>
				<CardCategorias
					nombreCategoria='Waffles, Pancackes y más..'
					hrefCategoria='/waffles'
				/>
				<CardCategorias
					nombreCategoria='Batidos y Licuados'
					hrefCategoria='/batidos'
				/>
				<CardCategorias
					nombreCategoria='Recomendaciones'
					hrefCategoria='/recomendaciones'
				/>
				<CardCategorias
					nombreCategoria='Gustos'
					hrefCategoria='/gustos'
				/>
				<CardCategorias
					nombreCategoria='Delivery'
					hrefCategoria='/delivery'
				/>
			</div>
		</section>
	);
};

export default CategoriasPrincipales;
