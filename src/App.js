import "./App.css";

function App() {
  let name="React App";
  return (
    <div className="App">
      <div className="App-header">{name}
      <Demo></Demo>
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="App">
      <div className="App-header">Demo</div>
    </div>
  );
}

export default App;
