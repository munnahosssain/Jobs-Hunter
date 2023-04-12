import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
