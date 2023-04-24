import React, { useState } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import "./styles/main.css"

function Main() {
  const [ItemId, setItemId] = useState("");

  const getItemIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setItemId(id);
  };

  return (
    <div className="full">
      <header className="header">
        <div className="container">
          <h1 className="header-brand">Reminder - Firebase</h1> 
        </div>
      </header>

      <div className="container" style={{ width: "400px" }}>
        <div className="row">
          <div className="col">
            <AddItem id={ItemId} setItemId={setItemId} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <ItemList getItemId={getItemIdHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;