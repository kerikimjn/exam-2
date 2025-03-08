import React, { useState } from "react";

function ShopStore() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    name: "",
    duty: "",
    price: "",
    time: "08.03.2025 14:56:10",
    id: ""
  });

  const [payed, setPayed] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const addEntry = () => {
    setEntries([...entries, newEntry]);
    setNewEntry({ name: "", duty: "", price: "", time: "" });
  };

  const deleteEntry = (index) => {
    const updatedEntries = entries.filter((entry, i) => i !== index);
    setEntries(updatedEntries);
  };

  const updateEntry = (index, updatedEntry) => {
    const updatedEntries = entries.map((entry, i) =>
      i === index ? updatedEntry : entry
    );
    setEntries(updatedEntries);
  };

  return (
    <div className="bg-gray-200 p-3">
      <div >
        <h1 className="text-2xl font-medium uppercase m-3">Shop Story</h1>
        <div className="bg-white p-3 flex gap-3 items-center outline-none">
          <input className="p-2 border-1 rounded-lg"
            type="text"
            name="name"
            placeholder="Name"
            value={newEntry.name}
            onChange={handleChange}
          />
          <input className="p-2 border-1 rounded-lg"
            type="text"
            name="duty"
            placeholder="Duty"
            value={newEntry.duty}
            onChange={handleChange}
          />
          {/* <input className="p-2 border-1 rounded-lg"
            type="text"
            name="price"
            placeholder="Payed Duty"
            value={newEntry.price}
            onChange={handleChange}
          /> */}
          {/* <input
            type="text"
            name="time"
            placeholder="Time"
            value={newEntry.time}
            onChange={handleChange}
          /> */}
          <button className="btn bg-pink-400 p-2" onClick={addEntry}>Add Entry</button>
        </div>
        <table className="mt-5">
          <thead>
            <tr className="flex gap-3 items-center gap-3 mb-4">
              <th>Name</th>
              <th>Duty</th>
              <th>Price</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index} className="bg flex gap-3 items-center gap-3 mb-4">
                <td>{entry.name}</td>
                <td>{entry.duty}</td>
                <td>{entry.price}</td>
                <td>{entry.time}</td>
                <td>{entry.setTotalPaid}</td>
                <td>
                  <button className="btn bg-pink-400 p-2 m-3" onClick={() => deleteEntry(index)}>Delete</button>
                  <button className="btn bg-pink-400 p-2 m-3"
                    onClick={() =>
                      updateEntry(index, {
                        ...entry,
                        price: prompt("Enter new price:", entry.price),
                      })
                    }
                  >
                    Change Duty
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShopStore;
