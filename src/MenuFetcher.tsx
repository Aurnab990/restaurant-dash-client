// MenuFetcher.tsx
import React, { useEffect, useState } from 'react';

interface MenuItem {
  _id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  stock: number;
}

const MenuFetcher: React.FC<{ onDataLoaded: (data: MenuItem[]) => void }> = ({ onDataLoaded }) => {
  useEffect(() => {
    // Fetch data from Menu.json using the fetch API
    fetch('http://localhost:5000/items')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        onDataLoaded(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [onDataLoaded]);

  return null; // This component doesn't render anything
};

export default MenuFetcher;
