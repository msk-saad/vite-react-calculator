import React, { useState } from 'react'

const App = () => {

  const [calculation, setCalculation] = useState('');

  return (
    <>
      <div className="calc">

        <div className="display">
          <input type="text" value = {calculation}/>
        </div>

        <p>
          <input type="button" value="1" onClick={displayFunction}/>
          <input type="button" value="2" onClick={e => setCalculation(calculation + e.target.value)}/>
          <input type="button" value="3" onClick={e => setCalculation(calculation + e.target.value)}/>
          <input type="button" value="+" onClick={e => setCalculation(calculation + e.target.value)}/>
        </p>


        <p>
          <input type="button" value="4" onClick={e => setCalculation(calculation + e.target.value)}/>
          <input type="button" value="5" onClick={e => setCalculation(calculation + e.target.value)}/>
          <input type="button" value="6" onClick={e => setCalculation(calculation + e.target.value)}/>
          <input type="button" value="-" onClick={e => setCalculation(calculation + e.target.value)}/>
        </p>

        <p>
          <input type="button" value="7" onClick={e => setCalculation(calculation + e.target.value)}/>
          <input type="button" value="8" onClick={e => setCalculation(calculation + e.target.value)}/>
          <input type="button" value="9" onClick={e => setCalculation(calculation + e.target.value)}/>
          <input type="button" value="*" onClick={e => setCalculation(calculation + e.target.value)}/>
        </p>

        <p>
          <input type="button" value="0" onClick={e => setCalculation(calculation + e.target.value)}/>
          <input type="button" value="." onClick={e => setCalculation(calculation + e.target.value)}/>
          <input type="button" value="=" onClick={e => setCalculation(eval(calculation))}/>
          <input type="button" value="/" onClick={e => setCalculation(calculation + e.target.value)}/>
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