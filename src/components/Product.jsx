import React from "react";

const Product = ({ product, handleAddToCart }) => (
  <div className="Products-item">
    <img src={product.image} alt={product.title} />
    <div className="Products-item-info">
      <div className="row align-items-center justify-content-between text-center">
        <div className="col-12 text-info text-uppercase Products-title">
          {product.title}
        </div>
        <div className="col-8 text-start text-danger">✍🏻 {product.author}</div>
        <div className="col-4 text-start text-warning">🏷️ ${product.price}</div>
      </div>
      <div className="row my-2">
        <div className="col-12 Products-desc">{product.description}</div>
      </div>
    </div>
    <button type="button" onClick={handleAddToCart(product)}>
      Buy Now
    </button>
  </div>
);

export default Product;
