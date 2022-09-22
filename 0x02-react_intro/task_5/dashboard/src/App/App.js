import './App.css';
import holbertonLogo from './holberton_logo.jpg'
import { getFullYear, getFooterCopy } from "./utils";

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
        <label htmlFor="email">Email</label>
        <input type="email" id="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"/>
        <button>OK</button>
      </div>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
