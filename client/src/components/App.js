import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  // const [bacon, setBacon] = useState(null);

  // useEffect(() => {
  //   fetch('/bacon')
  //     .then(res => res.json())
  //     .then(data => setBacon(data));
  // }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Cart />
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/products">
            <Collection />
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
