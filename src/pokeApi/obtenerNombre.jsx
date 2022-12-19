import axios from 'axios';

const obtenerNombre = () => {

  return (
    axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 100)}`)
    .then(function (response) {
      console.log(response.data.name)
      return response.data.name
    })

  )
}

export default obtenerNombre