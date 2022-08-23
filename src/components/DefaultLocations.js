import React from "react";

export default function DefaultLocations({ setCityName }) {
  const cities = [
    {
      id: 1,
      city: "New York",
    },
    {
      id: 2,
      city: "Toronto",
    },
    {
      id: 3,
      city: "London",
    },
    {
      id: 4,
      city: "Istanbul",
    },
    {
      id: 5,
      city: "Berlin",
    },
  ];

  return (
    <div className="city-container">
      {cities.map((city, index) => (
        <button
          key={index}
          className="city-btn"
          onClick={() => setCityName(city.city)}
        >
          {city.city}
        </button>
      ))}
    </div>
  );
}
