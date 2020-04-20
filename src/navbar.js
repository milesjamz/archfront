import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
<Link to='/'>Q u a r R e p o r t </Link>  ||  <Link to='/userchart'>calendar</Link>  || <Link to='/entry'>daily entry</Link> ||  <Link to='/login'>login</Link>  ||  logout || logged in as YOURNAME
    </div>
)
}

export default Navbar;