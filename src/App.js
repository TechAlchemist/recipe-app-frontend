import './App.css';
import { useState } from 'react';
import { getUser, logout } from './services/userService';
import Nav from './Components/Nav/Nav';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';


function App(props) {

  /* component state */
  const [userState, setUserState] = useState({ user: getUser() });

  /* helper functions */

  function handleSignupOrLogin() {
    // place user into state using the setter function
    setUserState({ user: getUser() });
    // programmatically route user to dashboard
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
  }

  return (
    <div className="App">
      <Nav user={userState.user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/" render={(props) => <HomePage />} />

        <Route
          exact path="/signup"
          render={(props) => (
            <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
          )}
        />
        <Route
          exact path="/login"
          render={(props) => (
            <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
          )}
        />
        </Switch>
    </div>
  );
}

export default App;
