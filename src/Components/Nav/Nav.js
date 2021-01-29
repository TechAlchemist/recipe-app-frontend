import { Link } from 'react-router-dom';

const Nav = (props) => {
  const user = props.user;
  let nav = props.user ?
    <>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {`${user.firstName} ${user.lastName} \n ${user.businessUnit}`}
        </li>
        <li className="nav-item">
        <Link to='/dashboard'> Dashboard </Link>
        </li>
        <li className="nav-item">
          <Link to='' onClick={props.handleLogout} > Logout </Link>
        </li>
      </ul>
    </>
    :
    <>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to='/login'> Login </Link>
        </li>

        <li className="nav-item">
          <Link to='/signup'> Signup </Link>
        </li>
      </ul>
    </>

  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="/">
      </a>
      {nav}
     </nav>
    </>
  );
};

export default Nav;