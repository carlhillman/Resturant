import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CustomForm from "./components/CustomForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import List from "./components/List";
import Home from "./pages";
function App() {
  //hooks
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
      </Router>
      <h1>Meny</h1>
      <CustomForm productType="Maträtt" dataCollection="dishes" />
      <List productType="Maträtter" dataCollection="dishes" />

      <CustomForm productType="Dryck" dataCollection="drinks" />
      <List productType="Drycker" dataCollection="drinks" />
    </div>
  );
}
export default App;
