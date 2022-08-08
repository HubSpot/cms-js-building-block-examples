import React, { useState } from 'react';


function Button(props) {
  const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={() => setCount(count + 1)}>You've clicked me {count} times...</button>
    </>
  )

}





export default Button;
