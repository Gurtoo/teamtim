import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import Main from "../pages/Main.tsx";
import NotFound from "../components/ui/NotFound.tsx";

import '../assets/scss/style.module.scss';

const RoutesComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout/>}>
					<Route index element={<Main />} />
				</Route>

				<Route
					path={"*"}
					element={<NotFound />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesComponent