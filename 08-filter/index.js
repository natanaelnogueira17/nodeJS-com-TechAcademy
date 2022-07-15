import {getPeople} from './starWarsService'

async function main(){
  const starWarsPeople = await getPeople(1)
  const starWarsPeopleFiltered = starWarsPeople
  .filter(person=>person.gender === 'female')
  .map((person)=> {
    return { name: person.name, gender: person.gender}
  })
    
    console.log(starWarsPeopleFiltered)
  
  }


main()