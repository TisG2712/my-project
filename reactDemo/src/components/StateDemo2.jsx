import React, { useState } from "react";

function StateDemo2() {
  
  const [level, setLevel] = useState(() => {
    const number = 1 + 1 + 1;

    console.log(number);
    
    return number
  });

  const handleLevel = () => {
    setLevel((prev) => prev + 1);
  };

  return (
    <>
      <h2>Ví dụ về useState với giá trị khởi tạo initial state</h2>
      <div>Level: {level}</div>
      <button onClick={handleLevel}>Click button to level up</button>
    </>
    
  );
}

export default StateDemo2;
