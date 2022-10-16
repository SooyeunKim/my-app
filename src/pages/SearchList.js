import React from 'react';


const hospitalsDB = [
  {
    name: "North York General Hospital",
    city: "Toronto",
    address: "4001 Leslie St, Toronto, ON M2K 1E1"
  },
  {
    name: "Toronto Western Hospital",
    city: "Toronto",
    address: "399 Bathurst St, Toronto, ON M5T 2S8"
  },
  {
    name: "Grand River Hospital",
    city: "Kitchener",
    address: "GRH KW Campus, 835 King St W, Kitchener, ON N2G 1G3"
  }
]
const SearchList = () => {
  const [hospitals, setHospitals] = React.useState(hospitalsDB);

  return <div className="container glass-morphism-1">
    {hospitalsDB.map((hospital, i) => { return (
      <div key={i} className="container-item">
        {hospital.name}
        <br />
        City: {hospital.city}
        <br />
        Address: {hospital.address}
        <button onClick={() => console.log("Clicked")}>Book</button>
      </div>
    )})}
  </div>;
};

export default SearchList;