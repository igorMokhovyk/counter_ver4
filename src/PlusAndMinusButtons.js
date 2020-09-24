import React from "react";


function PlusAndMinus(props) {

    const listCount = props.listCount;
    const listTitle = props.listTitle;






    return (
        <div>
            <ul>
                <button>Up</button>
                <button>Down</button>
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