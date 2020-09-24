import React, {useState} from "react";


function InputAndAddButton(props) {


    const [inputValue, setInputValue] = useState(0);

    const [inputNameOfColor, setInputNameOfColor] = useState(props.colorName);

    const [inputNumbersOfButtons, setInputNumberOfButtons] = useState([1]);

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
        setInputNumberOfButtons([1]);
        console.log(addButtonHandler)
    }


    return (
        <div>
<span>
            <input className='custom-select-lg shadow-lg' type='name' placeholder='Value' onChange={inputValueHandler} value={inputValue}/>
            <button className='btn btn-dark shadow-lg' onClick={addButtonHandler}>Add New Counter</button>
            <select className='custom-select-lg shadow-lg' onChange={inputNameHandler} value={inputNameOfColor}>
                <option >Black</option>
                <option>White</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Orange</option>
                <option>Chocolate</option>
            </select>
            <input className='custom-select-lg shadow-lg' type='number' placeholder='Number of Buttons' onChange={inputNumberHandler}
                   value={inputNumbersOfButtons}/>
</span>
        </div>
    )
};


export default InputAndAddButton;