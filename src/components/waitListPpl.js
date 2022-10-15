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
        console.log(waitListPplDB);
    }

    return <div className="glass-morphism-1 h-auto flex">
        {waitListPplDB.map((ppl, i) => {
            return (
                <div key={i}>
                    <br/>
                    #{i+1}
                    <br/>
                    Name: {ppl.name}
                    <br/>
                    Age: {ppl.age}
                    <br/>
                    Number: {ppl.number}
                    <button onClick={() => remove(i)}>X</button>
                </div>
            )
        })}
    </div>;
}
export default WaitListPpl;