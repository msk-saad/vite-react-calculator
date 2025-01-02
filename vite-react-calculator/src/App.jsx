import React, { useState } from 'react'
import './styles/app.css'

const App = () => {

  const [calculation, setCalculation] = useState('');

  const displayFunction = (event) => {
    const clickedVal = event.target.value;
    setCalculation(preVal => preVal + clickedVal);
  }

  return (
    <>
      <div className='container'>
        <div className="calc">

          <form action="">

          <div className="display">
            <input type="text" defaultValue={calculation} />
          </div>

            <p>
              <input type="button" defaultValue="1" onClick={displayFunction} />
              <input type="button" defaultValue="2" onClick={displayFunction} />
              <input type="button" defaultValue="3" onClick={displayFunction} />
              <input type="button" defaultValue="+" onClick={displayFunction} />
            </p>


            <p>
              <input type="button" defaultValue="4" onClick={displayFunction} />
              <input type="button" defaultValue="5" onClick={displayFunction} />
              <input type="button" defaultValue="6" onClick={displayFunction} />
              <input type="button" defaultValue="-" onClick={displayFunction} />
            </p>

            <p>
              <input type="button" defaultValue="7" onClick={displayFunction} />
              <input type="button" defaultValue="8" onClick={displayFunction} />
              <input type="button" defaultValue="9" onClick={displayFunction} />
              <input type="button" defaultValue="*" onClick={displayFunction} />
            </p>

            <p>
              <input type="button" defaultValue="0" onClick={displayFunction} />
              <input type="button" defaultValue="." onClick={displayFunction} />
              <input type="button" defaultValue="=" onClick={e => setCalculation(eval(calculation))} />
              <input type="button" defaultValue="/" onClick={displayFunction} />
            </p>

            <p>
              <input type="button" className='last-btns' defaultValue="AC" onClick={e => setCalculation('')} />
              <input type="button" defaultValue="Del" className='last-btns' onClick={e => setCalculation(calculation.slice(0, -1))} />
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default App