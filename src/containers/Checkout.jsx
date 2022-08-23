import React from "react";
import { connect } from "react-redux";
import actions from "../actions";
import "../styles/components/Checkout.styl";
import toast, { Toaster } from "react-hot-toast";

const Checkout = props => {
  const { cart } = props;

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const remove = product => () => {
    props.removeFromCart(product);
    toast.success(`${product.title} Successfully removed from Cart!`);
  };

  return (
    <div className="Checkout-no">
      <Toaster />
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-12">
            <h3 className="text-warning text-end fs-6">
              {cart.length > 0 ? "Shopping Cart" : "This cart is empty..."}
            </h3>
          </div>
        </div>
        {cart.map(item => (
          <div className="Checkout-item" key={item.title}>
            <div className="Checkout-element">
              <span>{item.title}</span>
              <span className="text-success">${item.price}</span>
            </div>
            <button
              type="button"
              onClick={remove(item)}
              className="bg-transparent"
            >
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h4 className="text-danger text-end fs-6 my-2">
            {`Total Price: $ ${handleSumTotal().toFixed(2)}`}
          </h4>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = {
  removeFromCart: actions.removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
