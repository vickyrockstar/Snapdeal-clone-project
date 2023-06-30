import "./App.css";
import { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import  PaymentPage  from "./components/PaymentPage";
import LoginPage from "./components/Signup/loginPage";
import SignUpPage from "./components/Signup/SignUpPage";
import ProductsDetails from "./components/ProductsDetails";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");
  const [apiData, setApiData] = useState([]);

  const APICALL = async () => {
    const res = await fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    );
    const Data = await res.json();
    setApiData(Data);
  };
  useEffect(() => {
    APICALL();
  }, []);

  const handleAddProucts = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      alert("Item already in cart !");
      return;
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      var cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartData.push({ ...product, quantity: 1 });
      localStorage.setItem(
        "cartItem",
        JSON.stringify([...cartItems, ...cartData])
      );
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home handleAddProucts={handleAddProucts} 
              // cartItems={cartItems}
              search={search}
              setSearch={setSearch}
              apiData={apiData} />
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            exact
            path="/payment"
            // setCartItems={setCartItems}
            element={<PaymentPage  />}
          />
          <Route
            exact
            path="/login"
            element={<LoginPage />}
          />
          <Route
            exact
            path="/Signup"
            element={<SignUpPage/>}
          />
          <Route
            exact
            path="/detail/:id"
            element={<ProductsDetails handleAddProucts={handleAddProucts} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
