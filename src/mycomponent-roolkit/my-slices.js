import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {plus,minus,myincrement } from "./my-component"

export function Mycomponent (){

    const count = useSelector((state) => state.mysleces.value);
    
    const dispatch = useDispatch();

    return(
        <div>

            <span>{count}</span>
            <button onClick={()=>dispatch(plus())}>+</button>
            <button onClick={()=>dispatch(minus())}>-</button>
            <button onClick={()=>dispatch(myincrement(70))}>+70</button>
        </div>
    );
};

export default Mycomponent;