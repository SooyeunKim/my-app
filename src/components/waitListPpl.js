import React from "react";
const waitListPplDB = [
    {
        name: 'Leanne Kim',
        age: 17,
        number: 911,
    },
    {
        name: 'Sean Wang',
        age: 17,
        number: 119,
    }
];

const WaitListPpl = () => {
    const [waitListPpl, setWaitListPpl] = React.useState(waitListPplDB);

    const remove = (i) => {
        setWaitListPpl(waitListPpl.splice(i, 1));
    }

    return <div className="container glass-morphism-1 h-auto flex">
        {waitListPplDB.map((ppl, i) => {
            return (
                <div key={i} className = "glass-morphism-1">
                    #{i + 1}
                    <br />
                    Name: {ppl.name}
                    <br />
                    Age: {ppl.age}
                    <br />
                    Number: {ppl.number}
                    <p align="right">
                    <button onClick={() => remove(i)} className = 'removebtn'>X</button>
                    </p>
                </div>
            )
        })}
    </div>;
}
export default WaitListPpl;