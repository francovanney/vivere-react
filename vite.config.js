import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// la linea 9 es para que se haga el auto deploy en githubpages.
// para hacer deploy al servidor, comentarla.
export default defineConfig({
	plugins: [react()]
	//base: "/vivere-react/"
});
