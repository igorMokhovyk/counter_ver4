import React, {useState} from 'react';
//import {v4 as uuidv4} from 'uuid';
import './App.css';
import PlusAndMinus from "./PlusAndMinusButtons";
import InputAndAddButton from "./InputAndAddButton";


const listCounter = [
    {id: 1, title: 'Green', count: 5, numberOfButtons: 0},
    {id: 2, title: 'Yellow', count: 15, numberOfButtons: 0},
    {id: 3, title: 'Red', count: 25, numberOfButtons: 0}
];


function App() {


    const [counter, setCounter] = useState(listCounter);


    const counterPlusMinus = ((id, value) => {
        const counterPlusMinusCopy = counter.map((el, index) => {
            if (el.id === id){
                return {...el, count: el.count - value}
            }
            return el;
        })
        setCounter(counterPlusMinusCopy)
    });


    const counterDeleteById = (id) => {
        const counterDeleteByIdCopy = counter.filter(el => el.id !== id);
        setCounter(counterDeleteByIdCopy);
    }




    return (


        <div className="App">
            <header className="App-header">
                <InputAndAddButton/>
                <br/>
                {counter.map(el => <PlusAndMinus counterDeleteById={counterDeleteById} id={el.id} counterPlusMinus={counterPlusMinus} listCount={el.count} listTitle={el.title}  />)}

            </header>
        </div>
    );
}

export default App;
