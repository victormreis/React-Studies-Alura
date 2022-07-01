import React from 'react';
import  Cronometro  from '../componentes/cronometro';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/lista';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
     <Formulario />
     <Lista />
     <Cronometro />
    </div>
  );
}

export default App;
