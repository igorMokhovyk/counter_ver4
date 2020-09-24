import React from "react";


function PlusAndMinus(props) {

    const listCount = props.listCount;
    const listTitle = props.listTitle;


    return (
        <div>
            <ul>
                <button disabled={ props.index === 0} onClick={() => props.buttonUp(props.index)}>Up</button>
                <button disabled={ props.index === props.array.length - 1} onClick={() => props.buttonDown(props.index)}>Down</button>
                {listTitle}
                <button onClick={() => props.counterPlusMinus(props.id, 1)}>-</button>
                {listCount}
                <button onClick={() => props.counterPlusMinus(props.id, -1)}>+</button>
                <button onClick={() => props.counterDeleteById(props.id)}>Delete</button>
            </ul>
        </div>
    )
};


export default PlusAndMinus;