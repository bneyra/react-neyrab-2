import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailedCard from "./Components/CardItems/DetailedCardContainer";
import Contacto from "./Components/Contacto/Contacto";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					main
					path="/react-neyrab-2/"
					element={<ItemListContainer />}
				/>
				<Route
					path="/react-neyrab-2/contacto"
					element={<Contacto />}
				/>
				<Route
					path="/react-neyrab-2/item/:id"
					element={<DetailedCard />}
				/>
				<Route
					path="/react-neyrab-2/category/:idCategory"
					element={<ItemListContainer />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
