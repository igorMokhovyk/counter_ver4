import React from "react";


function PlusAndMinus(props) {

    const listCount = props.listCount;
    const listTitle = props.listTitle;


    return (
        <div>
            <ul>


                {listTitle}
    {props.numberOfButtons.map(el => <button className='btn-dark rounded '
                                             onClick={() => props.counterPlusMinus(props.id, el)}>{-el}</button>).reverse()}
    {listCount}
    {props.numberOfButtons.map(el => <button className='btn-dark rounded '
                                             onClick={() => props.counterPlusMinus(props.id, -el)}>+{+el}</button>)}

    <button className='btn btn-danger position-sticky' onClick={() => props.counterDeleteById(props.id)}>Delete</button>
                <button className='btn btn-light' disabled={props.index === 0}
                        onClick={() => props.buttonUp(props.index)}>Up</button>
                <button className='btn btn-light' disabled={props.index === props.array.length - 1}
                        onClick={() => props.buttonDown(props.index)}>Down
                </button>

            </ul>
        </div>
    )
};


export default PlusAndMinus;