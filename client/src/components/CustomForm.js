import React, { useState, useEffect } from "react";
import database from "../firebase-config";

import { ref, set, get, update, remove, child, push } from "firebase/database";

function CustomForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const db = database;
  const dataCollection = ref(db, props.dataCollection + "/");

  const createProduct = () => {
    push(dataCollection, { name, description, price });
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <div className="form">
      <label>{props.productType}</label>
      <input
        id="name-field"
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      {props.productType === "Maträtt" && (
        <>
          <label>Beskrivning</label>
          <input
            className="description-area"
            type="textarea"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></input>
        </>
      )}
      <label>Pris</label>
      <input
        id="price-field"
        type="number"
        maxLength={3}
        name="price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      ></input>
      <button onClick={createProduct}>Lägg till {props.productType}</button>
    </div>
  );
}
export default CustomForm;
