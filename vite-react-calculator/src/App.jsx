import React, { useState } from 'react'

const App = () => {

  const [calculation, setCalculation] = useState('');

  const displayFunction = () => {
    const clickedVal = event.target.value;
    setCalculation(preVal => preVal + clickedVal);
  }

  return (
    <>
      <div className="calc">

        <div className="display">
          <input type="text" value = {calculation}/>
        </div>

        <p>
          <input type="button" value="1" onClick={displayFunction}/>
          <input type="button" value="2" onClick={displayFunction}/>
          <input type="button" value="3" onClick={displayFunction}/>
          <input type="button" value="+" onClick={displayFunction}/>
        </p>


        <p>
          <input type="button" value="4" onClick={displayFunction}/>
          <input type="button" value="5" onClick={displayFunction}/>
          <input type="button" value="6" onClick={displayFunction}/>
          <input type="button" value="-" onClick={displayFunction}/>
        </p>

        <p>
          <input type="button" value="7" onClick={displayFunction}/>
          <input type="button" value="8" onClick={displayFunction}/>
          <input type="button" value="9" onClick={displayFunction}/>
          <input type="button" value="*" onClick={displayFunction}/>
        </p>

        <p>
          <input type="button" value="0" onClick={displayFunction}/>
          <input type="button" value="." onClick={displayFunction}/>
          <input type="button" value="=" onClick={e => setCalculation(eval(calculation))}/>
          <input type="button" value="/" onClick={displayFunction}/>
        </p>

        <p>
          <input type="button" value="AC" onClick={e => setCalculation('')}/>
          <input type="button" value="Del" onClick={e => setCalculation(calculation.slice(0,-1))}/>
        </p>
      </div>

    </>
  )
}

export default App