import logo from './logo.svg';
import dollarSign from './dollar-sign-icon.png'
import Button from './Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={dollarSign} className="App-logo dollar-sign" alt="logo" />
        <p className='heading-text'>
          Welcome to Dollar$ Bank
        </p>
        <div className="links-area">
          <Button
            className="App-link"
          >
            Sign In
          </Button>
          <Button
            className="App-link"
          >
            New User
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
