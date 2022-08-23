import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/components/Header.styl";

const Header = props => (
  <div className="Header">
    <h1 className="Header-title">
      <Link to="/">Jest Store</Link>
    </h1>
    <div className="Header-checkout">
      <div className="row align-items-center justify-content-between">
        <div className="col-6 text-white">
          <Link to="/checkout">
            <span className="fs-4">🛒</span>
          </Link>
        </div>
        <div className="col-6">
          {(props.cart.length > 0 && (
            <div className="Header-alert">{props.cart.length}</div>
          )) || <span className="mx-1 Header-alert">0</span>}
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, null)(Header);
