import { RouterProvider } from "react-router-dom";

import { router } from "./router/router";

import "./global.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
