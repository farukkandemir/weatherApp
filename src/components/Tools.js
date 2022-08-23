import React, { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

export default function Tools({ setCityName, setTempUnit }) {
  const [input, setInput] = useState();

  function handleSearch() {
    if (input !== "") setCityName(input);
  }

  return (
    <div className="tools">
      <div className="inputs">
        <input
          type="text"
          className="search-bar"
          placeholder="Searh"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BiSearch
          className="btn search-btn"
          size="1.4rem"
          onClick={handleSearch}
        />
        <BiCurrentLocation className="btn location-btn" size="1.4rem" />
      </div>
      <div className="temparature-changer">
        <button className="celcius" onClick={() => setTempUnit(true)}>
          ℃
        </button>
        <p>|</p>
        <button className="fahrenheit" onClick={() => setTempUnit(false)}>
          ℉
        </button>
      </div>
    </div>
  );
}

/* 
  get the value of input 
  search button clicked set the value of input to city name
*/
