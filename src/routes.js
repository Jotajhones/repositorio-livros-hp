import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Favoritos from "./pages/Favorites";
import FavoritesProvider from "./context/favorites";
import PageNotFound from "./pages/PageNotFound";
import Description from "./pages/Description";

function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/favoritos" element={<Favoritos />} ></Route>
                    <Route path="/description/:id" element={<Description />} ></Route>
                    <Route path="*" element={<PageNotFound />} ></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;