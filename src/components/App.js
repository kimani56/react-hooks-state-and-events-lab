import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const[theme, setTheme] = useState(true)

function handleTheme(){
setTheme(!theme)
}
 
 // replace 'false' with a state variable that can be toggled between true and false
// this will be used for the Dark Mode Toggle feature
  const appClass = theme ? "App light" : "App dark"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleTheme}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
