import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import CheckOut from "./components/CheckOut/CheckOut";
function App() {
  return (
    <body>
      <div className="App">
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
        <Footer className="Footer" />
      </div>
    </body>
  );
}

export default App;
