import React from "react";

interface LessonOneProps {
  name: string;
  age: number;
  theme: 'dark' | 'light';
}

function LessonOne({ name, age, theme }: LessonOneProps) {
  return(   
    <div style={{ color: theme === 'dark' ? 'blue' : 'red' }}>
      <p className="name">УРОК 1 ПРИВЕТ, {name} {age}</p>
    </div>    
  );
}

export default LessonOne;