import React, { useState } from 'react';
import '.././AddDishes/AddNewItems.css';

interface User {
  title: string;
  price: number;
  description: string;
  inStock: number;
  img: string;
}

function AddNewItem() {
  const [users, setUsers] = useState<User[]>([]);

  const handleAddItem = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const title = formData.get('name') as string;
    const price = parseFloat(formData.get('price') as string);
    const description = formData.get('description') as string;
    const inStock = parseInt(formData.get('quantity') as string, 10);
    const img = formData.get('img') as string;

    const user: User = { title, price, description, inStock, img };
    console.log(user);

    try {
      const response = await fetch('http://localhost:5000/items/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        //console.log("Success", data);
        alert("New Item Added " + JSON.stringify(data));
      } else {
        alert('Failed to add a new item');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-new-item">
      <form onSubmit={handleAddItem}>
        <h2>Add New Item</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            placeholder='item name'
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="img"
            id="img"
            placeholder='image URL'
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            id="description"
            placeholder='Description'
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="price"
            id="price"
            placeholder='price'
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="quantity"
            id="quantity"
            placeholder='Quantity'
          />
        </div>
        <button className="add-button" type="submit">
          Add New Item
        </button>
      </form>
    </div>
  );
}

export default AddNewItem;
