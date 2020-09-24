import React, {useState} from "react";


function InputAndAddButton(props) {


    const [inputValue, setInputValue] = useState('');

    const [inputNameOfColor, setInputNameOfColor] = useState(props.colorName);

    const [inputNumbersOfButtons, setInputNumberOfButtons] = useState('');

    const inputValueHandler = (event) => {
        setInputValue(+event.target.value);
    }

    const inputNumberHandler = (event) => {
        setInputNumberOfButtons(+event.target.value);
    }

    const inputNameHandler = (event) => {
        setInputNameOfColor(event.target.value);
    }

    const colorName = props.colorName

    const addButtonHandler = () => {
        props.addButton(inputValue, inputNameOfColor, inputNumbersOfButtons);
        setInputValue(0)
        setInputNameOfColor(colorName)
        setInputNumberOfButtons(0);
        console.log(addButtonHandler)
    }


    return (
        <div>

            <input type='number' placeholder='Value' onChange={inputValueHandler} value={inputValue}/>
            <button onClick={addButtonHandler}>Add New Counter</button>
            <select onChange={inputNameHandler} value={inputNameOfColor}>
                <option>Black</option>
                <option>White</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Orange</option>
                <option>Brown</option>
            </select>
            <input type='number' placeholder='Number of Buttons' onChange={inputNumberHandler}
                   value={inputNumbersOfButtons}/>

        </div>
    )
};


export default InputAndAddButton;