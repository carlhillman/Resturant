import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";
import database from "./firebase-config";
import { ref, set, get, update, remove, child, push } from "firebase/database";

function App() {
  const db = database;
  const dishesCollection = ref(db, "dishes/");
  //hooks
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [dishes, setDishes] = useState();
  //hämtar data
  useEffect(() => {
    get(ref(db, "dishes")).then((snapshot) => {
      if (snapshot.exists()) {
        const dishesSnapshot = snapshot.val();
        const dishesArray = [];
        for (let id in dishesSnapshot) {
          dishesArray.push({ id, ...dishesSnapshot[id] });
          //  console.log(id);
        }
        setDishes(dishesArray);
      }
    });
  });
  //hooks

  const createDish = () => {
    push(dishesCollection, { name, description, price });
    setName("");
    setDescription("");
    setPrice("");
  };
  const deleteDish = (id) => {
    remove(ref(db, "dishes/" + id));
  };
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <h1>Meny</h1>
      <div className="form">
        <label>Maträtt</label>
        <input
          id="name-field"
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <label>Beskrivning</label>
        <input
          className="description-area"
          type="textarea"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></input>
        <label>Pris</label>
        <input
          id="price-field"
          type="money"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        ></input>
        <button onClick={createDish}>Lägg till maträtt</button>
      </div>
      <h3>Maträtter</h3>
      <table style={{ marginLeft: "auto", marginRight: "auto" }}>
        <thead>
          <tr>
            <th>Namn</th>
            <th>Beskrivning</th>
            <th>Pris</th>
          </tr>
          {dishes
            ? dishes.map((dish) => (
                <React.Fragment  key={dish.id}>
                  <tr>
                    <td>{dish.name}</td>
                    <td >{dish.description}</td>
                    <td>{dish.price}kr</td>
                    <td>
                      <button onClick={() => deleteDish(dish.id)}>
                        ta bort
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))
            : ""}
        </thead>
      </table>
    </div>
  );
}
export default App;
