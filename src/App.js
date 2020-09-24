import React, {useState} from 'react';
//import {v4 as uuidv4} from 'uuid';
import './App.css';
import PlusAndMinus from "./PlusAndMinusButtons";
import InputAndAddButton from "./InputAndAddButton";


const listCounter = [
    {id: 1, title: 'green', count: 5, numberOfButtons: [1]},
    {id: 2, title: 'yellow', count: 15, numberOfButtons: [1]},
    {id: 3, title: 'red', count: 25, numberOfButtons: [1]}
];


function App() {


    const [counter, setCounter] = useState(listCounter);

    const colors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure",
        "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood",
        "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan",
        "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen",
        "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray"]
    let colorName = colors[Math.floor(Math.random() * 10)];


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

    const addCounter = (inputValue, inputNameOfColor, inputNumbersOfButtons) => {
        const newButtons = [];
        for ( let i = 1; i <= inputNumbersOfButtons; i++){
            newButtons.push(i)
        }
        const addButtonCopy = [...counter];
        addButtonCopy.push({id: Math.random(), title: inputNameOfColor, count: inputValue, numberOfButtons: newButtons});
        setCounter(addButtonCopy);
    }


    return (


        <div className="App">
            <header className="App-header">
                <h1 className='App-h1'>
                    Color Mixer
                </h1>
                <InputAndAddButton addButton={addCounter} colorName={colorName}/>
                <br/>
                {counter.map((el, index, array) => <PlusAndMinus numberOfButtons={el.numberOfButtons}
                                                                 buttonDown={buttonDown} buttonUp={buttonUp}
                                                                 counterDeleteById={counterDeleteById} id={el.id}
                                                                 counterPlusMinus={counterPlusMinus}
                                                                 listCount={el.count}
                                                                 listTitle={el.title} index={index} array={array}
                                                                 key={el.id}/>)}

            </header>
        </div>
    );
}

export default App;
