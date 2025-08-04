import React, { useEffect, useState } from "react";

function Mytestcomponnt({name, age}){
const[visible, setVisible] = useState(true)

    const [ agr, Setagr] = useState(0)
console.log('render');

useEffect (()=>{

setTimeout(() => {
    console.log('effect')
}, 1000)
},[visible])


// const counttest =  useCallback(()=>{

// },[])

const [arr, setArr] =useState([
    1,2,3,4
])


    return(
        <div className='nametest'>
               NAME={name}, Date={age} AGREE={agr}
            <button onClick={() => Setagr(prevstate => ++prevstate)}>Button</button>
             <button onClick={() => Setagr('0')}>Button clear</button>
            <button style={{opacity: visible ? 1 : 0}} onClick={()=>{setVisible(p => !p)}}>Button VISIBLE</button>
           
           {arr.map((e,i)=> <p key={i}>{e}</p>)} 
        </div>
    )
}


export default Mytestcomponnt;