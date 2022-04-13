import React, { useRef } from "react";
import style from "./Checkout.module.css";

const isEmpty = (value) => {
  return value.trim() === "";
};
const isNotFiveChars = (value) => {
  return value.trim().length !== 5;
};

function Checkout(properties) {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    console.log("form submitted successfully");
  };

  return (
    <form className={style.form} onSubmit={confirmHandler}>
      <div className={style.control}>
        <label htmlFor="">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      <div className={style.control}>
        <label htmlFor="">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
      </div>
      <div className={style.control}>
        <label htmlFor="">Postal Code</label>
        <input ref={postalCodeInputRef} type="text" id="postal" />
      </div>
      <div className={style.control}>
        <label htmlFor="">City</label>
        <input ref={cityInputRef} type="text" id="city" />
      </div>
      <div className={style.actions}>
        <button onClick={properties.onCancel} type="button">
          Cancel
        </button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
