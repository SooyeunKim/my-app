import React from 'react';

function WaitList() {
  return (
    <h1>WaitList</h1>
    <Button/>

    const Button = () => {
      const onClick = () => {
        console.log('click')
      }

      return (
        <button onClick={onClick} style={green} className="btn">
          Add
        <button/>
      )
    }
  )
    
};  

  export default WaitList;