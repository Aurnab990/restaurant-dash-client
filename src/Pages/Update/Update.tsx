import React, { useState } from 'react';
import MenuFetcher from '../../MenuFetcher';
import '../../Pages/Update/Update.css';
import { Link } from 'react-router-dom';

interface MenuItem {
  _id: number; 
  img: string;
  title: string;
  description: string;
  price: number;
}

const Update = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const onDataLoaded = (data: MenuItem[]) => {
    setMenuItems(data);
  };

  const handleDelete = (id: number) => {
    const proceed = window.confirm("Are you sure to Delete?");
    if (proceed) {
      console.log("Deleting item id:", id);
      const url = `http://localhost:5000/items/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainingItems = menuItems.filter((item) => item._id !== id);
          setMenuItems(remainingItems);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className=''>
      <MenuFetcher onDataLoaded={onDataLoaded}></MenuFetcher>
      {menuItems.map((item) => (
        <div className="product-row" key={item._id}>
          <img src={item.img} alt={item.title} className="product-image" />
          <div className="product-info">
            <div className="product-name">{item.title}</div>
            <div className="product-price">Price: ${item.price}</div>
            <div className="product-description">{item.description}</div>
          </div>
          <div className="product-buttons">
            <Link to={`/update/${item._id}`}><button className="update-button">Update</button></Link>
            <button onClick={() => handleDelete(item._id)} className="delete-button">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Update;
