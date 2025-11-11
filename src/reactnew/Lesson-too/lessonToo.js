import { useEffect, useMemo, useState } from "react";

function LessonTwo({data}) {
    const [count, setCount] = useState(0); // возвращает состояние и функцию
    
    console.log('render');

    const [arr, setArr] = useState([1,2,3,4]);
    
const callCount = useMemo(() => { console.log('UseMemo')},[count])

   useEffect(() => {
    setTimeout(() => { console.log('effect') }, 1000)
},[data])

    return (
        <div>
            <p>УРОК 2 остановился на useEffect 01:11</p>
            <p>Счетчик: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Увеличить счетчик
            </button>

            {arr.map((e,i)=><p key={i}>{e+1}</p>)}
        </div>
    );
}

export default LessonTwo;