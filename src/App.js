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
            if (el.id === id) {
                return {...el, count: el.count - value}
            }
            return el;
        })
        setCounter(counterPlusMinusCopy)
    });


    const buttonUp = (index) => {
        const buttonUpCopy = [...counter]
        const newButtonUpCopy = buttonUpCopy[index];
        buttonUpCopy[index] = buttonUpCopy[index - 1];
        buttonUpCopy[index - 1] = newButtonUpCopy;
        setCounter(buttonUpCopy);
        console.log(buttonUp, index)
    }

    const buttonDown = (index) => {
        const buttonDownCopy = [...counter]
        const newButtonDownCopy = buttonDownCopy[index];
        buttonDownCopy[index] = buttonDownCopy[index + 1];
        buttonDownCopy[index + 1] = newButtonDownCopy;
        setCounter(buttonDownCopy);
        console.log(buttonDown, index)
    }


    const counterDeleteById = (id) => {
        const counterDeleteByIdCopy = counter.filter(el => el.id !== id);
        setCounter(counterDeleteByIdCopy);
    }


    return (


        <div className="App">
            <header className="App-header">
                <InputAndAddButton/>
                <br/>
                {counter.map((el, index, array) => <PlusAndMinus buttonDown={buttonDown} buttonUp={buttonUp}
                                                          counterDeleteById={counterDeleteById} id={el.id}
                                                          counterPlusMinus={counterPlusMinus} listCount={el.count}
                                                          listTitle={el.title} index={index} array={array}/>)}

            </header>
        </div>
    );
}

export default App;
