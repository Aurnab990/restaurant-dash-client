import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Update/UpdatedItem.css'

interface User {
  _id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  stock: number;
}

function UpdatedItems() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const url = `http://localhost:5000/items/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data: User) => setUser(data));
  }, [id]);

  const handleUpdateItems = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = (event.currentTarget.querySelector("#name") as HTMLInputElement).value;
    const price = (event.currentTarget.querySelector("#price") as HTMLInputElement).value;
    const stock = (event.currentTarget.querySelector("#stock") as HTMLInputElement).value;

    const updatedItem = { title, price, stock };

    fetch(`http://localhost:5000/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Update Successfully ' + JSON.stringify(data));
        event.currentTarget?.reset();
      });
  };

  return (
    <div className="container">
      <form id="updateForm" onSubmit={handleUpdateItems}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" required />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input type="text" id="stock" name="stock" required />
        </div>

        <button className="newUpdateButton" type="submit">Update Item</button>
      </form>
    </div>
  );
}

export default UpdatedItems;
