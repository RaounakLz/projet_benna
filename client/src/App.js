import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

import Contact from "./components/Contact";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { clientCurrent } from "./JS/clientSlice/clientSlice";
import { useDispatch, useSelector } from "react-redux";
import Profil from "./components/Profil";
import PrivateRoute from "./privateRoute/PrivateRoute";

import About from "./components/About";

// import { accessoireGet } from "./JS/produitSlice";
// import { vetementGet } from "./JS/vetementSlice";


import Accdescr from "./components/ProductDesc";
import Footer from "./components/Footer";
// import { commandeGet } from "./JS/commandeSlice";
import Dashbord from "./components/admin/Dashbord";

import Pannier from "./components/Pannier";
import Navbarr from "./components/Navbarr";
import { produitGet } from "./JS/produitSlice";
import Tea from "./components/Product/Tea";
import Sweet from "./components/Product/Sweet";
import Chocolate from "./components/Product/Chocolate";
import Salty from "./components/Product/Salty";
import { commandeGet } from "./JS/commandeSlice";
function App() {
  const isAuth = localStorage.getItem("token");
  const [ping, setping] = useState(false);
  const dispatch = useDispatch();



  useEffect(() => {

    dispatch(clientCurrent());
    dispatch(produitGet());


    dispatch(commandeGet());
  }, [ping]);

  return (
    <div>
      <div>
        {/* <Navigation ping={ping} setPing={setping} />  */}
        <Navbarr />

      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/Sweet" element={<Sweet />} />
          <Route path="/Salty" element={<Salty />} />
          <Route path="/Chocolate" element={<Chocolate />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/dashbord"
            element={<Dashbord ping={ping} setping={setping} />}
          />

          <Route
            path="/accdescr/:id"
            element={<Accdescr ping={ping} setping={setping} />}
          />


          <Route
            path="/pannier" element={<Pannier ping={ping} setping={setping} />}
          />
          <Route element={<PrivateRoute />}>
            <Route path="/profil" element={<Profil />} />
          </Route>
        </Routes></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
