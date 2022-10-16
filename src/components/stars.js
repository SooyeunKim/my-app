import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
    
const Stars = (props) => {
    const [rating, setRating] = React.useState(props.rating);

    const determineStars = () => {
        if (props.rating < 0.5) {
            return(<div><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></div>)
        } else if (props.rating < 1.0) {
            return(<div><BsStarHalf/><BsStar/><BsStar/><BsStar/><BsStar/></div>)
        } else if (props.rating < 1.5) {
            return(<div><BsStarFill/><BsStar/><BsStar/><BsStar/><BsStar/></div>)
        } else if (props.rating < 2.0) {
            return(<div><BsStarFill/><BsStarHalf/><BsStar/><BsStar/><BsStar/></div>)
        } else if (props.rating < 2.5) {
            return(<div><BsStarFill/><BsStarFill/><BsStar/><BsStar/><BsStar/></div>)
        } else if (props.rating < 3.0) {
            return(<div><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/><BsStar/></div>)
        } else if (props.rating < 3.5) {
            return(<div><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/></div>)
        } else if (props.rating < 4.0) {
            return(<div><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/></div>)
        } else if (props.rating < 4.5) {
            return(<div><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/></div>)
        } else if (props.rating < 5.0) {
            return(<div><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></div>)
        } else {
            return(<div><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></div>)
        }
    }

    return (
        determineStars()
    )
}

export default Stars