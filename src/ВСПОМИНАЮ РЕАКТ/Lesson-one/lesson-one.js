import React, { useState } from "react";

function LessonOne({name, age, theme}){

    
    const [state, setState] = useState();
    return(   
    <div style={{color: theme === 'dark' ? 'blue': 'red'}}>
     
         <p className="name"> УРОК 1 ПРИВЕТ, {name} {age} </p>
    </div>    
    )

    
}


export default LessonOne;