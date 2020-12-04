import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
// console.log(props)
const toggler = (boolean) => {
if (boolean === false) {
  return <span> <Link to='/login'>Log In</Link></span>
} else {
  return <span> <Link to='/userchart'>calendar</Link> || <Link to='/entry'>daily entry</Link> || <Link to='/foodjournal'>food journal</Link> || <Link to='/fooddaychart'>food day calendar</Link> ||<button onClick={props.logOut} > log out </button> || {props.user ? props.user.username : null} </span>
 }
}

  return (
    <div className="Navbar">
<Link to='/'>Q u a r R e p o r t </Link>  || {toggler(props.loggedIn)}
    </div>
)
}

export default Navbar;