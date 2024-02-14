import React, { useState } from "react";
import './App.css';
import Data from './Data.json';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className='container'>
      <h1>Tatlılar</h1>
      <div className='inputContainer'>
        <input 
          className='search' 
          type="text" 
          placeholder="Ürün adı giriniz."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='dataContainer'>
        {Data.filter((val) => {
          if (searchTerm === "") {
            return true; 
          } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
          }
          return false; 
        }).map((val) => {
          return (
            <div className="data" key={val.id}>
              <img src={val.image} alt="" />
              <h3>{val.title}</h3>
              <p>{val.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
