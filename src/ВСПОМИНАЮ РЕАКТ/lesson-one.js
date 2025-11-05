import React, { useState } from "react";

function LessonOne({name, age, theme}){
const theme ='dark'
    
    const [state, setState] = useState();
    return(   
    <div style={{color:theme === 'dark' ? 'blue': 'red'}}>
        <p>Остановился первый урок 01:13</p>
         <p className="name">ПРИВЕТ, {name} {age} </p>
    </div>    
    )

    
}


export default LessonOne;