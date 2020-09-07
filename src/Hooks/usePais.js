import React, {useState} from 'react';

const usePais = (stateInicial, opciones) => {
    const [state, setState] = useState(stateInicial)

    const selectPais = () => (
        <select
            className="browser-default blue darken-1 boton_pais"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            {opciones.map(p => <option key={p.code} value={p.code}>{p.country}</option>)}
        </select>
    )

    return [state, selectPais]
}
 
export default usePais;