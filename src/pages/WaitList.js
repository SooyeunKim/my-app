import React from 'react'
import { useState } from 'react'
import WaitListPpl from '../components/waitListPpl'
import '../App.css';

const WaitList = () => {
    const onClick = () => {
        console.log('hi')
    }

    return (
        <div className="container">
            <header>
                <p align="center">
                    <h1 className="waitList" >Waitlist</h1>
                    <button onClick={onClick} className='waitListAddButton'>Add</button>
                </p>
            </header>
            <WaitListPpl />
        </div>
    )

}

export default WaitList