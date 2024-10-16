import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Favoritos from "./pages/Favorites";
import FavoritesProvider from "./context/favorites";
import PageNotFound from "./pages/PageNotFound";
import Description from "./pages/Description";
import CommentsProvider from "./context/commentsContext";
import EstrelasProvider  from "./context/estrelas";

function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <CommentsProvider>
                    <EstrelasProvider>
                        <Routes>
                            <Route path="/" element={<Home />} ></Route>
                            <Route path="/favoritos" element={<Favoritos />} ></Route>
                            <Route path="/description/:id" element={<Description />} ></Route>
                            <Route path="*" element={<PageNotFound />} ></Route>
                        </Routes>
                    </EstrelasProvider>
                </CommentsProvider>
            </FavoritesProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;