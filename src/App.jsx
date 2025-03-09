import { Route, Routes, useNavigate } from "react-router";
import Header from "./components/Layout/Header";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Orders from "./components/Orders/Orders";
import Footer from "./components/Layout/Footer";

function App() {
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/category");
    }
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 px-4">
          <Routes>
            <Route path="/category" index element={<Categories />} />
            <Route path="/category/:categoryname" element={<Products />} />
            <Route
              path="/category/:categoryname/:productname"
              element={<ProductDetails />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
