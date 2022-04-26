import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";
import {CartContext} from "../components/CartContext";

const Home = () => {
    return (
        <CartContext>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
        </CartContext>
    );
}

export default Home;