import axios from 'axios';

const obtenerUbicacion = () => {

  return (
    axios.get(`https://pokeapi.co/api/v2/location/${Math.floor(Math.random() * 100)}/`)
    .then(function (response) {
      console.log(response.data.name)
      return response.data.name
    })

  )
}

export default obtenerUbicacion