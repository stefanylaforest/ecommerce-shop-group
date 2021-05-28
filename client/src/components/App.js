import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Confirmation from "./Confirmation";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import Checkout from "./Checkout";
import GlobalStyles from "./GlobalStyles";
import ProductDetails from "./ProductDetails";
import ViewOrder from "./ViewOrder";
import CollectionPage from "./CollectionPage";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleClickOnCartIcon = () => {
    setIsCartVisible((isCartVisible) => !isCartVisible);
  };

  return (
    <BrowserRouter>
      <GlobalStyles />
      {isCartVisible && <Cart />}
      <Header handleClickOnCartIcon={handleClickOnCartIcon} />
      <main>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/products">
            <CollectionPage />
          </Route>
          <Route exact path="/products/:productId">
            <ProductDetails />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/confirmtion">
            <Confirmation />
          </Route>
          <Route exact path="/view-order">
            <ViewOrder />
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
