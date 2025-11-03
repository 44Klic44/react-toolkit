import React, { useState } from "react";

function LessonOne({name, age}){

    
    const [state, setState] = useState();
    return(   
    <div>
         <p className="name">ПРИВЕТ, {name} {age} </p>
    </div>    
    )

    
}


export default LessonOne;