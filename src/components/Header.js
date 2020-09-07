import React, {useEffect} from 'react';
import PropTypes from 'prop-types'

import usePais from '../Hooks/usePais'

const Header = ({ titulo, setPais }) => {
    const paises = [
        {code:'mx', country:'México'},
        {code:'ar', country:'Argentina'},
        {code:'ca', country:'Canada'},
        {code:'it', country:'Italia'},
        {code:'us', country:'USA'},
        {code:'ve', country:'Venezuela'},
        {code:'gb', country:'Inglaterra'},
    ]

    const [pais, SelectPais] = usePais('mx', paises)

    useEffect(() => {
        setPais(pais)
    }, [pais, setPais])
    
    return (
        <nav>
            <div className="nav-wrapper light-blue bg-darken-3">
                <a href="#!" className="brand-logo center titulo"> {titulo} </a>
                <ul className="right">
                    <li>
                        <div className="row">
                            <div className="input-field col s12">
                                <SelectPais/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;