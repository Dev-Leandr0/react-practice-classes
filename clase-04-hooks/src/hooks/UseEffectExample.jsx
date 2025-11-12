import React, { useEffect, useState } from 'react'

function UseEffectExample() {

  const [count, setCount] = useState(0);
  const [othercount, setOthercount] = useState(5);
  const [time, setTime] = useState(0);
  const [count1, setCount1] = useState(0);


  useEffect(() => {
    /* ${count} */
    document.title = `${othercount}  New Message!`;

    /* ${count} */
  }, [othercount]);



  /* Clear Up  */
  useEffect(() => {

    const timer = setInterval(() => {

      setTime(time + 1);

    }, 1000);

    return () => {
      clearInterval(timer);
    }

  });

  useEffect(() => {
    console.log('Run effect', count1);

    return () => {

      console.log('Clen up', count1);
    }

  }, [count1]);

  return (
    <div>
      <h1>UseEffectExample</h1>

      <h3>{count} New Message!</h3>
      <button onClick={() => setCount(count + 1)}>+</button>

      <h3>{othercount} Otro contador</h3>
      <button onClick={() => setOthercount(othercount + 5)}>+</button>

      <h3>{time} in seconds</h3>

      <button onClick={() => setCount1(count1 + 1)}>X</button>

    </div>
  )
}

export default UseEffectExample