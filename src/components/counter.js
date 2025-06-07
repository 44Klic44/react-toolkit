import { useState } from "react";

function Mycounter(){


    const [count, setCounter] = useState(0)

    const onClickPlus = () =>{
     setCounter(count + 1);
    }
     const onClickMinus = () =>{
     setCounter(count - 1);
    }
    return(
        <div>
         <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
        </div>
    )
}

export default Mycounter;