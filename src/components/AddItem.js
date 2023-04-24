import React, { useState, useEffect } from "react";

import ItemDataService from "../services/itemServices";

const AddItem = ({ id, setItemId }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("not complete");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || date === "" || time === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newItem = {
      name,
      date,
      time,
      status,
    };
    console.log(newItem);

    try {
      if (id !== undefined && id !== "") {
        await ItemDataService.updateItem(id, newItem);
        setItemId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await ItemDataService.addItems(newItem);
        setMessage({ error: false, msg: "New reminder added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setDate("");
    setTime("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ItemDataService.getItem(id);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setDate(docSnap.data().date);
      setTime(docSnap.data().time);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="main">
        {message?.msg && (
          <div
            className={`alert ${
              message?.error ? "alert-danger" : "alert-success"
            }`}
            role="alert"
          >
            {message?.msg}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setMessage("")}
            >x</button>
          </div>
        )}
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div  >
              <label htmlFor="title">Name:</label>
              <input
              className="inp"
                type="text"
                
                id="name"
                placeholder="..Name of reminder.."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div  >
              <label htmlFor="author">Date. :</label>
              <input
                type="text"
                className="inp"
                id="date"
                placeholder="..Date.."
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div  >
              <label htmlFor="author">Time :</label>
              <input
                type="text"
                className="inp"
                id="time"
                placeholder="..Time.."
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <div className="btn3">
              <button className="btn4"
                disabled={flag}
                
                onClick={(e) => {
                  setStatus("complete");
                  setFlag(true);
                }}
              >
                complete
              </button>
              <button
                className="btn4"
                disabled={!flag}
                onClick={(e) => {
                  setStatus("not complete");
                  setFlag(false);
                }}
              >
                not complete
              </button>
            </div>
            <div className="btn3">
              <button className="btn2"  type="submit">
                Add Reminder
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItem;
