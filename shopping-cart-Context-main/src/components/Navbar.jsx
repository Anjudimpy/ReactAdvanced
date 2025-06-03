import React from "react";
import styles from "../styles/Total.module.css";
import {useValue } from "../itemContext";

function Navbar() {
  const {handleReset, total, item,toggleCart} = useValue()
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button onClick={toggleCart}>Cart</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Navbar;
