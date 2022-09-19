import './App.css';
import holbertonLogo from './holberton_logo.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} alt='Holberton School Logo'></img>
          <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <p>
          Login to access to the full dashboard
        </p>
      </div>
      <footer className='App-footer'>
        <p> Copyright 2022 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
