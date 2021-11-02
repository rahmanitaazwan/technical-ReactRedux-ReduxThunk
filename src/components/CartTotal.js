import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

const CartTotal = (props) => {
  const shippingRef = useRef(false);

  useEffect(() => {
    if (shippingRef.checked) {
      props.substractShipping();
    }
  });

  const handleChecked = (e) => {
    if (e.target.checked) {
      props.checkShipping();
      props.addShipping();
    } else {
      props.uncheckShipping();
      props.substractShipping();
    }
  };

  return (
    <div className="container">
      <div className="collection">
        <li className="collection-item">
          <label>
            <input
              type="checkbox"
              ref={shippingRef}
              onChange={handleChecked}
              checked={props.shippingChecked}
            />
            <span>Shipping(+6$)</span>
          </label>
        </li>
        <li className="collection-item">
          <b>Total: {props.total} $</b>
        </li>
      </div>
      <div className="checkout">
        <button className="waves-effect waves-light btn light-green accent-4">
          Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
    shippingChecked: state.shippingChecked
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
    checkShipping: () => {
      dispatch({ type: "CHECK_SHIPPING" });
    },
    uncheckShipping: () => {
      dispatch({ type: "UNCHECK_SHIPPING" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal);
