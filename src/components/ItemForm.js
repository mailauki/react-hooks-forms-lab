import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const newItem = {id: uuid(), name: props.itemName, category: props.itemCategory}

  function handleSubmit(event) {
    event.preventDefault()
    props.onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={props.onItemNameChange} value={newItem.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={props.onItemCategoryChange} value={newItem.category} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
