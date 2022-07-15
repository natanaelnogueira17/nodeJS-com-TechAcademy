import fetch from 'node-fetch'

const apiUrl = 'http swapi.dev/api/planets/1/'

async function getPeople(page =1){
  const response = await fetch (`${apiUrl}/people?page=${page}`)
  const people = await response.json()
  return people.results


}

export {getPeople}