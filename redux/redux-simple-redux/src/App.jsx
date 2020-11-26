import React from 'react';
import './App.css';

import Intervalo from './componets/Intervalo'
import Media from './componets/Media'
import Soma from './componets/Soma'
import Sorteio from './componets/Sorteio'


function App() {

  return (
    <div className="App">
      <h1> React+Redux </h1>

      <div className="linha">
        <Intervalo> </Intervalo>
      </div>
      <div className="linha">
        <Media> </Media>
        <Soma> </Soma>
        <Sorteio> </Sorteio>
      </div>

    </div>
  );
}

export default App;
