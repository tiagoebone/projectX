import { Outlet } from "react-router-dom";
import "./app.css";
import Navbar from "./components/navbar/navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}
