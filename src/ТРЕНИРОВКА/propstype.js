import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product }) {


ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired, // пропс id должен быть числом обязательный
    name: PropTypes.string.isRequired,// пропс name должен быть строкой обязательный
    price: PropTypes.number.isRequired,// пропс prise должен быть числом обязательный
    discount: PropTypes.number, // необязательный
  }).isRequired, // сам объект `product` обязателен
};

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>ID: {product.id}</p>
      <p>Price: ${product.price}</p>
      {product.discount && <p>Discount: {product.discount}%</p>}
    </div>

    
  );
}

export default ProductCard;