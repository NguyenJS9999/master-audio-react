// Ngày tạo dự án 20/09/2021
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationPage from "./navigation/NavigationPage";

import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/product/ProductsPage";
import ProductDetailPage from "./pages/productDetail/ProductDetailPage";
import WishListPage from "./pages/wishlist/WishListPage";
import ShoppingCartPage from "./pages/shopping-cart/ShoppingCartPage";
import CheckOutPage from "./pages/check-out/CheckOutPage";
import BuildConfigPage from "./pages/build-config/BuildConfigPage";
import TypicalProjectsPage from "./pages/typical-projects/TypicalProjectsPage";
import NewsPage from "./pages/news/NewsPage";
import ContactPage from "./pages/contact/ContactPage";

import FooterPage from "./footer/FooterPage";



function App() {
  return (
    <Router>
      <div>
        <NavigationPage />
        {/* <nav>
          <ul>

            <li>
              <Link to="/">Home</Link> ok
            </li>
            <li>
              <Link to="/products">Products</Link> ok
            </li>
        
            <li>
              <Link to="/product-detail">Product Detail</Link>
            </li>

            <li>
              <Link to="/shopping-cart">Shopping Cart Page</Link> ok
            </li>

            <li>
              <Link to="/check-out">Check Out Page</Link>
            </li>

            <li>
              <Link to="/wish-list">Wish list Page</Link> ok
            </li>

            <li>
              <Link to="/build-config">Build Config Page</Link> ok
            </li>

            <li>
              <Link to="/typical-projects">typical-projects</Link>
            </li>

            <li>
              <Link to="/news">News</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>
        </nav> */}

        <Switch>
       

          <Route path="/products" exact>
            <ProductsPage />
          </Route>

          <Route path="/product-detail:slug/:id">
            <ProductDetailPage />
          </Route>

          <Route path="/shopping-cart" exact>
            <ShoppingCartPage />
          </Route>

          <Route path="/check-out" exact>
            <CheckOutPage />
          </Route>
          

          <Route path="/wish-list" exact>
            <WishListPage />
          </Route>

          <Route path="/build-config" exact>
            <BuildConfigPage />
          </Route>

          <Route path="/typical-projects" exact>
            <TypicalProjectsPage />
          </Route>

          
          <Route path="/news" exact>
            <NewsPage />
          </Route>

          <Route path="/contact" exact>
            <ContactPage />
          </Route>

          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>

        <FooterPage />
      </div>
    </Router>
    
  );
}

export default App;
