import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Resturant</h1>
      <div className="form">
        <label>Maträtt</label>
        <input type="text" name="name"></input>
        <label>Beskrivning</label>
        <input type="text" name="description"></input>
        <label>Pris</label>
        <input type="money" name="price"></input>
        <button>Lägg till</button>
      </div>
    </div>
  );
}

export default App;
