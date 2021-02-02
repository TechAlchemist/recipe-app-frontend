import { Link } from 'react-router-dom';
import { logout } from '../services/firebase';

const Nav = ({ user }) => {

  function handleLogout(event) {
    event.preventDefault();
    logout();
  }

  const loggedIn = (
    <> 
      <h1> { user ? user.email : "-" } is logged in. </h1>
      <li>
        <Link to="" onClick={handleLogout} > Logout </Link>
      </li>
    </>
  );

  const unauthedUser = (
     <>
      <li>
        <Link to='/login'> Login </Link>
      </li>
      <li>
        <Link to='/signup'> Signup </Link>
      </li>
     </>
  );

  return (
    
     <nav>
        <ul>
        {
          user 
          ?
          loggedIn
          :
          unauthedUser
        }
        </ul>
     </nav>

  );
};

export default Nav;