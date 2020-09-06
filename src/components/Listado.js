import React from 'react';
import PropTypes from 'prop-types'
import Noticia from './Noticia'

const Listado = ({ noticias }) => {
    return (
        <div className="row">
            {noticias.map(noti => (
                <Noticia
                    key={noti.url}
                    noticia={noti}
                />
            ))}
        </div>
    );
}

Listado.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default Listado;