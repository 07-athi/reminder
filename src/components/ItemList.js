import React, { useEffect, useState } from "react";
import ItemDataService from "../services/itemServices";

const ItemList = ({ getItemId }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const data = await ItemDataService.getAllItems();
    console.log(data.docs);
    setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ItemDataService.deleteItem(id);
    getItems();
  };
  return (
    <>
    <div className="mb-2">
      <button className="edit" onClick={getItems}>
        View Reminder List
      </button>
    </div>

    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((doc, index) => {
          return (
            <tr key={doc.id}>
              <td >{index + 1}</td>
              <td >{doc.name}</td>
              <td >{doc.date}</td>
              <td >{doc.time}</td>
              <td >{doc.status}</td>
              <td className="tab">
                <button
                  className="bt"
                  onClick={(e) => getItemId(doc.id)}
                >
                  Update
                </button>
                <button
                  className="bt"
                  onClick={(e) => deleteHandler(doc.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
  );
};

export default ItemList;