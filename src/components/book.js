import React from 'react'
import Stars from './stars'
import { GoLocation } from 'react-icons/go'

const Book = (props) => {
    const [active, setActive] = React.useState(true);

    function isActive() {
        if (props.active && active) {
            return (
                <div className="glass-morphism-1 floating-window">
                    <h1><GoLocation/> {props.hospital.name}</h1>
                    <p>{props.hospital.waiters} people are waiting for this hospital</p>
                    <Stars rating={props.hospital.rating}/>
                    <button className="removebtn" onClick={() => setActive(false)}>Cancel</button>
                    <button className="removebtn" onClick={() => window.open("/submit", "_self")}>Book</button>
                </div>
            )
        } else {
            return null
        }
    }
    return (
        isActive()
    )
}

export default Book