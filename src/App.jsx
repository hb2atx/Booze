import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItem from "./AddItem";
import SnackOrBoozeApi from "./Api";
import "./App.css";
import Home from "./Home";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import NavBar from "./NavBar";

function App() {
  const INIITIAL_FORM_DATA = {
    name: "",
    description: "",
    recipe: "",
    serve: "",
  };
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState({});
  const [formData, setFormData] = useState(INIITIAL_FORM_DATA);

  useEffect(() => {
    async function getItems() {
      let items = await SnackOrBoozeApi.getItems();
      setItems(items);
      setIsLoading(false);
    }
    getItems();
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((fdata) => ({
      ...fdata,
      [name]: value,
    }));
  };

  const submitHandler = (e, type) => {
    e.preventDefault();
    const newItem = {
      ...formData,
      id: formData.name.toLowerCase().replace(/\s/g, "-"),
    };
    const added = type === 'snacks' ? SnackOrBoozeApi.addSnack(newItem) : SnackOrBoozeApi.addDrink(newItem);
    added
      ? (window.location.href = `/${type}`)
      : alert("Something went wrong. Please try again.");
    setFormData(INIITIAL_FORM_DATA);
  };

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar numSnacks={items.snacks.length} numDrinks={items.drinks.length} />
        <main>
          <Routes>
            <Route path="/snacks" element={<Menu items={items.snacks} title="Snacks" />} />
            <Route path="/drinks" element={<Menu items={items.drinks} title="Drinks" />} />
            <Route path="/snacks/add" element={<AddItem type="snacks" formData={formData} changeHandler={changeHandler} submitHandler={submitHandler} />} />
            <Route path="/drinks/add" element={<AddItem type="drinks" formData={formData} changeHandler={changeHandler} submitHandler={submitHandler} />} />
            <Route path="/snacks/:id" element={<MenuItem items={items.snacks} cantFind="/snacks" />} />
            <Route path="/drinks/:id" element={<MenuItem items={items.drinks} cantFind="/drinks" />} />
            <Route path="/" element={<Home />} />
            <Route element={<p>Oops. That's not here, but click Snacks or Drinks for some tasty options!</p>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
