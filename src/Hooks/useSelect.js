import React, {useState} from 'react';

const useSelect = ( stateInicial, opciones ) => {

    console.log(opciones)
    const [state, setState] = useState(stateInicial)
    
    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange= {e => setState(e.target.value)}
        >
            {
                opciones.map(tema =>(<option key = {tema.cat} value={tema.cat}>{tema.nombre}</option>))
            }
        </select>
    )

    return [state, SelectNoticias]
}
 
export default useSelect;