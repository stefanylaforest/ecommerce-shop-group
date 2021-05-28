import React, { useState, useEffect } from "react";
import GlobalStyles, { theme } from "./GlobalStyles";

function App() {
  // const [bacon, setBacon] = useState(null);

  // useEffect(() => {
  //   fetch('/bacon')
  //     .then(res => res.json())
  //     .then(data => setBacon(data));
  // }, []);

  return (
    <div>
      {" "}
      <GlobalStyles />
    </div>
  );
}

export default App;
