import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Characters } from "../../pages/Characters";
import { Movies } from "../../pages/Movies";
import { Spells } from "../../pages/Spells";
import { DefaultLayout } from "../../layout/DefaultLayout";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/characters" element={<Characters />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/spells" element={<Spells />} />
			</Route>
		</Routes>
	);
}
