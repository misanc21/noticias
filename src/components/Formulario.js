import React from 'react';

import useSelect from '../Hooks/useSelect'

import Styles from './Formulario.module.css'

const Formulario = ({ setCategoria }) => {

    const opciones = [
        { cat: 'general', nombre: 'General' },
        { cat: 'business', nombre: 'Negocios' },
        { cat: 'entertainment', nombre: 'Entretenimiento' },
        { cat: 'health', nombre: 'Salud' },
        { cat: 'science', nombre: 'Ciencia' },
        { cat: 'sports', nombre: 'Deportes' },
        { cat: 'technology', nombre: 'Tecnología' }
    ]

    const [categoria, SelectNoticias] = useSelect('general', opciones);

    const buscarNoticias = e => {
        e.preventDefault()
        setCategoria(categoria)
    }

    return (
        <div className={`row ${Styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={Styles.heading}>Encuentra Noticias por categoría</h2>
                    <div className="input-field col s12">
                        <SelectNoticias
                        />
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