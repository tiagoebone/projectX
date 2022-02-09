import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Appa";
import Inicial from "./routes/inicial";
import Sobre from "./routes/sobre";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <link rel="stylesheet" href="/css/global.css" />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="inicial" element={<Inicial />} />
        <Route path="sobre" element={<Sobre />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
