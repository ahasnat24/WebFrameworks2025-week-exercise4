import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import ProductsView from "./components/ProductsView";
import ProductDetailsView from "./components/ProductDetailsView";
import CartView from "./components/CartView";


const Layout = () => {
  return (
    <div>
      <nav style={{ 
        display: 'flex', 
        gap: '20px', 
        padding: '20px', 
        borderBottom: '1px solid #ccc',
        backgroundColor: '#f5f5f5'
      }}>
        <Link to="/" role="link">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsView />} />
          <Route path="products/:id" element={<ProductDetailsView />} />
          <Route path="cart" element={<CartView />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;