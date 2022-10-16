import React from 'react';
import Book from '../components/book';

const hospitalsDB = [
  {
    name: "North York General Hospital",
    city: "Toronto",
    address: "4001 Leslie St, Toronto, ON M2K 1E1",
    waiters: 12,
    rating: 4.5
  },
  {
    name: "Toronto Western Hospital",
    city: "Toronto",
    address: "399 Bathurst St, Toronto, ON M5T 2S8",
    waiters: 3,
    rating: 5
  },
  {
    name: "Grand River Hospital",
    city: "Kitchener",
    address: "GRH KW Campus, 835 King St W, Kitchener, ON N2G 1G3",
    waiters: 5,
    rating: 4
  }
]
const SearchList = () => {
  const [activeBook, setActiveBook] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  function handleClick(i) {
    setIndex(i);
    console.log(i);
    setActiveBook(true);
  }

  return <>
    <div className="container glass-morphism-1">
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
          <button onClick={() => handleClick(i)} className = 'removebtn'>Book</button>
          </p>
        </div>
      )})}
    </div>
    <Book active={activeBook} hospital={hospitalsDB[index]}/>
  </>
};

export default SearchList;