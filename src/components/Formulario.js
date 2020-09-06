import React from 'react';

import Styles from './Formulario.module.css'

const Formulario = () => {
    return (  
        <div className={`row ${Styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={Styles.heading}>Encuentra Noticias por categoría</h2>
                    <div className="input-field col s12">
                        <button
                            type="submit"
                            className={`btn-large amber darken-2 ${Styles.btn_block}`}
                        >Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Formulario;