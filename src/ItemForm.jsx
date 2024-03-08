import React, { useState } from "react";

function ItemForm({ setData }) {
  const initialState = {
    item: "",
    name: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [item, setItem] = useState("snack");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value
    }));
  };

  const handleItemChange = (e) => {
    const sel = e.target;
    setItem(sel.value);
  };

  const setDataForParent = (e) => {
    e.preventDefault();
    // Make sure that 'item' is set in formData
    setFormData((fData) => ({
      ...fData,
      item: item
    }));
    setData(formData);
  };

  return (
    <form onSubmit={setDataForParent}>
      <label htmlFor="item">Food or Drink?</label>
      <select onChange={handleItemChange} id="item" name="item">
        <option value="snack">Snack</option>
        <option value="drink">Drink</option>
      </select>

      <br />

      <label htmlFor="name">Item Name</label>
      <input
        type="text"
        onChange={handleChange}
        id="name"
        name="name"
        value={formData.name}
      />

      <br />

      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
