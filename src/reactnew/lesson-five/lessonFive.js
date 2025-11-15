import React, { useContext } from "react";
import LessonContext from "./LessonContext"; // правильный путь

function LessonFive() {
  const lesson = useContext(LessonContext);
  
  return (
    <div>
      <h2>УРОК 5 - КОНТЕКСТ (Context API)  Jcnfyjdbkcz 01.19 REDUCER практика</h2>
      <p>Этот компонент демонстрирует работу React Context</p>
      <div style={{ padding: '20px', border: '2px solid blue', margin: '10px' }}>
        <h3>Значение из контекста:</h3>
        <p><strong>{lesson}</strong></p>
      </div>
    </div>
  );
}

export default LessonFive;