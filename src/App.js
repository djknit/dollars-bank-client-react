import { useState } from 'react';
import logo from './logo.svg';
import dollarSign from './dollar-sign-icon.png'
import Button from './Button';
// import Form from './Form';
import NewUserForm from './NewUserForm';
import LoginForm from './LoginForm';
import './App.css';

function App() {
  const [isShowingForm, setIsShowingForm] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);
  console.log('isShowingForm', isShowingForm)
  console.log('isNewUser', isNewUser)

  const openForm = (isNewUserForm) => {
    setIsShowingForm(true);
    console.log('test')
    if (isNewUserForm) {
      setIsNewUser(true);
    } else {
      setIsNewUser(false);
    }
  };

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
            action={() => openForm(false)}
            isActive={(isShowingForm && !isNewUser) ? true : undefined}
          >
            Sign In
          </Button>
          <Button
            className="App-link"
            action={() => openForm(true)}
            isActive={(isShowingForm && isNewUser) ? true : undefined}
          >
            New User
          </Button>
        </div>
      </header>
      <div className='forms-area'>
          <NewUserForm
            isVisible={isShowingForm && isNewUser}
          />
          <LoginForm
            isVisible={isShowingForm && !isNewUser}
          />
      </div>
    </div>
  );
}

export default App;
