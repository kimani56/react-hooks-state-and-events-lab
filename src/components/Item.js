import React, { useState } from "react";

function Item({ name, category }) {
const [liClassName, setLiClassName] = useState("")
const [textHandler, setTextHandler] = useState(true)
const [buttonText, setButtonText] = useState("Add to Cart")

function AddToCart(){
  setTextHandler(!textHandler)
  textHandler ? setLiClassName("in-cart") : setLiClassName("")
  textHandler ? setButtonText("Add to cart") : setButtonText("Remove From Cart")
}

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={AddToCart} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
