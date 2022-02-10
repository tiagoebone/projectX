import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app";
import Inicial from "./containers/inicial/inicial";
import Sobre from "./containers/sobre/sobre";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <link rel="stylesheet" href="/css/global.css" />
    <link rel="stylesheet" href="/css/nprogress.css" />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="inicial" element={<Inicial />} />
        <Route path="sobre" element={<Sobre />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
