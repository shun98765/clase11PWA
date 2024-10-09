import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { operaciones } from '../helpers/operaciones';
import Resultado from './Resultado';
import './NumberImput.css'

const NumberImput = () => {

    const[numeros,setNumeros]= useState({
        numero1: 0,
        numero2: 0,
        numero3: 0,
        numero4: 0,
        numero5: 0,
        numero6: 0,
        numero7: 0,
        numero8: 0
    });
    const {handleChange,suma,resta,multi,divi,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8} = operaciones(numeros,setNumeros)
    
  return (
   <>
   <h3>Caso Suma</h3>
   <label htmlFor="">numero1: </label>
   <input name='numero1' value={numero1} onChange={handleChange} type="number" />
   <label htmlFor="">numero2: </label>
   <input name='numero2' value={numero2} onChange={handleChange} type="number" />
   <Resultado operacion="suma" calculo={suma()}/><br />

   <h3>Caso Resta</h3>
   <label htmlFor="">numero1: </label>
   <input name='numero3' value={numero3} onChange={handleChange} type="number" />
   <label htmlFor="">numero2: </label>
   <input name='numero4' value={numero4} onChange={handleChange} type="number" />
   <Resultado operacion="resta" calculo={resta()}/><br />

   <h3>Caso Multiplicación</h3>
   <label htmlFor="">numero1: </label>
   <input name='numero5' value={numero5} onChange={handleChange} type="number" />
   <label htmlFor="">numero2: </label>
   <input name='numero6' value={numero6} onChange={handleChange} type="number" />
   <Resultado operacion="multi" calculo={multi()}/><br />

   <h3>Caso División</h3>
   <label htmlFor="">numero1: </label>
   <input name='numero7' value={numero7} onChange={handleChange} type="number" />
   <label htmlFor="">numero2: </label>
   <input name='numero8' value={numero8} onChange={handleChange} type="number" />
   <Resultado operacion="divi" calculo={divi()}/><br />
   
   </>
  )
}

NumberImput.propTypes = {
    name: PropTypes.string
}

export default NumberImput;






