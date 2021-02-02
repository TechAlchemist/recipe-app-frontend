import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { auth } from './services/firebase';

import Nav from './components/Nav';
import NotFound from './components/NotFound';

import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

import './App.css';


function App(props) {

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      user => setUserState({ user })
    );
    return () => unsubscribe();
  }, []);

  const [ userState, setUserState ] = useState({
    user: null
  });

  return (
    <div className="App">
      <Nav user={userState.user} />
      <Switch>
        <Route 
        exact path="/" 
        render={(props) => 
        <HomePage user={userState.user} {...props} />} 
        />
        <Route
          exact path="/signup"
          render={(props) => ( <SignupPage {...props} /> )}
        /> 
        <Route
          exact path="/login"
          render={(props) => ( <LoginPage {...props} /> )}
        />
        <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
