import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crwn.svg";

import './header.styles.scss'

const Header = ({ currentUser }) => {
    console.log('user in header');
    console.log('currentuser in header is', currentUser);
    console.log('user in header');
    
    return (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link> 
            <Link className="option" to='/shop'>CONTACT</Link>
            {
                currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                : 
                (<Link className="option" to='./signin' >SIGN IN</Link>
            )}
            <CartIcon />
        </div>
        <CartDropdown />
    </div>
)}

const mapStateToProps = state => {
    console.log('state in header', state)
    return {
        currentUser: state.user.currentUser
        }
}

export default connect(mapStateToProps)(Header);
// export default Header;