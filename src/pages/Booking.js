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
const Booking = () => {
  const [hospitals, setHospitals] = React.useState(hospitalsDB);

  const remove = (i) => {
    setHospitals(hospitals.splice(i, 1));
  }

  return <div className="glass-morphism-1">
    <p align = "center">
      <h1 className = "waitList" >Booking Hospitals</h1>
    </p>
    {hospitalsDB.map((hospital, i) => { return (
      <div key={i} className="glass-morphism-1">
        <span style={{ fontWeight: 'bold' }}>{hospital.name}</span>
        <br />
        City: {hospital.city}
        <br />
        Address: {hospital.address}
        <p align='right'>
        <button onClick={() => remove(i)}
        className = 'removebtn'>Book</button>
        </p>
      </div>
    )})}
  </div>;
};

export default Booking;