import './App.css';
import Forecast from './compnents/Forecast/Forecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>

      
      <main>
        <Forecast />
      </main>
      <footer>
        Page created Faboade Oluwatosin
      </footer>

    </div>
  );
}

export default App;