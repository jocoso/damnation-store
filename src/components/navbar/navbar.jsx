import "./navbar.css"

import PropTypes from "prop-types";

const Navbar = ( { className="", style="", children } ) => {
    className = className + ' nav-flex';
    
    return(<>
        <nav id="nav-bar" style={style} className={className}>
            {children}
        </nav>
    </>);
}

Navbar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
}

export default Navbar;