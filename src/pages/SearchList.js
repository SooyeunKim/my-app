import React from 'react';


const hospitalsDB = [
  {
    name: "North York General Hospital",
    city: "Toronto",
    address: "4001 Leslie St, Toronto, ON M2K 1E1",
    waiters: "12"
  },
  {
    name: "Toronto Western Hospital",
    city: "Toronto",
    address: "399 Bathurst St, Toronto, ON M5T 2S8",
    waiters: "3"
  },
  {
    name: "Grand River Hospital",
    city: "Kitchener",
    address: "GRH KW Campus, 835 King St W, Kitchener, ON N2G 1G3",
    waiters: "5"
  }
]
const SearchList = () => {
  const [hospitals, setHospitals] = React.useState(hospitalsDB);

  return <div className="container glass-morphism-1">
    <p align = "center">
      <h1 className = "waitList" >
        <span style = {{ textShadow:"#607EAA"}}>
          Booking Hospitals
        </span>
      </h1>
    </p>
    {hospitalsDB.map((hospital, i) => { return (
      <div key={i} className="container-item glass-morphism-1">
        <span style={{ fontWeight: 'bold', fontSize: 22.5 }}>{hospital.name}</span>
        <br />
        <span style={{ background: "#8FE3CF" }}>
          # of waiting people: {hospital.waiters}
        </span>
        <br />
        City: {hospital.city}
        <br />
        Address: {hospital.address}
        <br />
        <p align='right'>
        <button onClick={() => console.log("Clicked")} className = 'removebtn'>Book</button>
        </p>
      </div>
    )})}
  </div>;
};

export default SearchList;