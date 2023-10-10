import React, { useState } from 'react';
import '../All-items/AllItems.css'
import MenuFetcher from '../../../MenuFetcher';

interface MenuItem {
  _id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  stock: number;
}

function AllItems() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const onDataLoaded = (data: MenuItem[]) => {
    setMenuItems(data);

  };
  return (
    <div className="menu-container">
      <MenuFetcher onDataLoaded={onDataLoaded} />
      {menuItems.map((item) => (
        <div className="menu-item" key={item._id}>
            <img src={item.img}></img>
          <h2>{item.title}</h2>
          {
            item.stock>0?<p>Stock:{item.stock}</p>:<p>Stock out</p>
          }
          <p>Price: ${item.price}</p>
          <button className="cool-button">Order Now</button>
        </div>
      ))}
    </div>
  );
}

export default AllItems;
