import "./App.css";
import { useState, useEffect } from "react";
import database from "./firebase-config";
import { ref, set, get, update, remove, child, push } from "firebase/database";

function App() {
  const db = database;
  //hooks
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState();
  //hämtar data
  useEffect(() => {
    get(ref(db, "dishes")).then((snapshot) => {
      if (snapshot.exists()) {
       setData(snapshot.val())
      }
    });
  });
  //hooks

  const createDish = () => {
    const dishCollection = ref(db, "dishes/");
    push(dishCollection, { name, price });
  };

  return (
    <div className="App">
      <h1>Resturant</h1>
      <div className="form">
        <label>Maträtt</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <label>Beskrivning</label>
        <input type="text" name="description"></input>
        <label>Pris</label>
        <input
          type="money"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        ></input>
        <button onClick={createDish}>Lägg till maträtt</button>
      </div>

      <h1>maträtter</h1>


      {/* {data.map(dish => (
        <p>{dish}</p>
      ))} */}
    </div>
  );
}
export default App;
