import React, { useState, useEffect } from "react";
import { ref, set, get, update, remove, child, push } from "firebase/database";
import database from "../firebase-config";

function List(props) {
  const db = database;
  //hook for getting produts
  const [products, setProducts] = useState([]);
  //tar bort en dish
  const deleteProduct = (id) => {
    remove(ref(db, props.dataCollection + "/" + id));
  };

  //hämtar data
  useEffect(() => {
    get(ref(db, props.dataCollection)).then((snapshot) => {
      if (snapshot.exists()) {
        const collectionSnapshot = snapshot.val();
        const array = [];
        for (let id in collectionSnapshot) {
          array.push({ id, ...collectionSnapshot[id] });
          //  console.log(id);
        }
        setProducts(array);
      }
    });
  }, [products]);

  return (
    <div>
      <h2>{props.productType}</h2>
      <table style={{ marginLeft: "auto", marginRight: "auto" }}>
        <thead>
          <tr>
            <th>Namn</th>
            {/* om produkten gäller maträtter visa beskrivning */}
            {props.productType === "Maträtter" && <th>Beskrivning</th>}
            <th>Pris</th>
          </tr>
          {products
            ? products.map((prod) => (
                <React.Fragment key={prod.id}>
                  <tr>
                    <td>{prod.name}</td>
                    {/* om produkten gäller maträtter visa beskrivning */}
                    {props.productType === "Maträtter" && (
                      <td>{prod.description}</td>
                    )}
                    <td>{prod.price}kr</td>
                    <td>
                      <button onClick={() => deleteProduct(prod.id)}>
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

export default List;
