import React from 'react';
import Noticia from './Noticia'

const Listado = ({noticias}) => {
    return (  
        <div className="row">
            {noticias.map(noti =>(
                <Noticia 
                      key = {noti.url}
                      noticia = {noti}
                />
            ))}
        </div>
    );
}
 
export default Listado;