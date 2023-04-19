import { BrowserRouter, RouteProps, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import AddProduct from "./components/AddProduct";
import Allproductpage from "./components/Products/Allproductpage";
import Productcontainer from "./components/Products/Productcontainer";
import Specificproductpage from "./components/Products/Specificproductpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/sellproduct" element={<AddProduct />} />
        <Route
          exact
          path="/product-type/shoes"
          element={<Allproductpage type={"Shoes"} />}
        />
        <Route
          exact
          path="/product/:type/:id/"
          element={<Specificproductpage />}
        />
        <Route
          exact
          path="/product-type/clothes"
          element={<Allproductpage type={"Clothes"} />}
        />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
