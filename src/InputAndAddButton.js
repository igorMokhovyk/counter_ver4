import React, {useState} from "react";


function InputAndAddButton(props) {


    const [inputValue, setInputValue] = useState('');

    const [inputNameOfColor, setInputNameOfColor] = useState(props.colorName)

    const inputValueHandler = (event) => {
        setInputValue(+event.target.value);
    }

    const inputNameHandler = (event) => {
        setInputNameOfColor(event.target.value);
    }

    const colorName = props.colorName

    const addButtonHandler = () => {
        props.addButton(inputValue, inputNameOfColor);
        setInputValue(0)
        setInputNameOfColor(colorName)
        console.log(addButtonHandler)
    }


    return (
        <div>
            <input type='name' placeholder='Name of Color' onChange={inputNameHandler} value={inputNameOfColor}/>
            <input type='number' placeholder='Value' onChange={inputValueHandler} value={inputValue}/>
            <button onClick={addButtonHandler}>Add New Counter</button>


        </div>
    )
};


export default InputAndAddButton;