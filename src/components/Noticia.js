import React from 'react';
import PropTypes from 'prop-types'

const Noticia = ({ noticia }) => {
    const { urlToImage, url, title, description, source } = noticia

    const imagen = urlToImage ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
        : null

    return (
        <div className="col s12 m6 l6">
            <div className="card large">
                {imagen}
                <div className="card-content">
                    <h6 className="blue-grey lighten-5">{title}</h6>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver noticia completa</a>
                </div>
            </div>
        </div>
    )
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;