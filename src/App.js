import React,  {Fragment, useState, useEffect} from 'react';
import axios from 'axios'

import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState ([])

  useEffect(()=>{
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=b894c24ec9f746c2b5f0a2ab455b6931`
      const respuesta = await axios.get(url)
      setNoticias(respuesta.data.articles)
    }
    consultarApi()
  },[categoria])

  return (
    <Fragment>
      <Header
        titulo = 'Buscador de noticias'
      />
      <div className="container white">
        <Formulario
          setCategoria = {setCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
