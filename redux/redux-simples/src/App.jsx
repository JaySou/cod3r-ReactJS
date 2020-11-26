import React, { useState } from 'react';
import './App.css';

import Intervalo from './componets/Intervalo'
import Media from './componets/Media'
import Soma from './componets/Soma'
import Sorteio from './componets/Sorteio'


function App() {

  const [min, setMin] = useState(100)
  const [max, setMax] = useState(1000)

  return (
    <div className="App">
      <h1> React+Redux </h1>

      <div className="linha">
        <Intervalo  
            min={min} 
            max={max}
            onMinChange={setMin}
            onMaxChange={setMax}
        > </Intervalo>
      </div>
      <div className="linha">
        <Media min={min} max={max}> </Media>
        <Soma min={min} max={max}> </Soma>
        <Sorteio min={min} max={max}> </Sorteio>
      </div>

    </div>
  );
}

export default App;
