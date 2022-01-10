import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")
  const [newItem, setNewItem] = useState({})

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    })
    .filter(item => item.name.includes(search))

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  function submitNewItem(newItem) {
    setNewItem(newItem)
    addNewItem(newItem)
    setItemName("")
    setItemCategory("Produce")
  }

  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={submitNewItem} 
        onItemNameChange={e => setItemName(e.target.value)} 
        onItemCategoryChange={e => setItemCategory(e.target.value)}
        itemName={itemName}
        itemCategory={itemCategory}
      />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
