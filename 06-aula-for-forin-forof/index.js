import {getPeople} from './starWarsService'

async function main(){
  const starWarsPeople = await getPeople(1)
  //for (let i =0; i<starWarsPeople.length; i++){
   // console.log(starWarsPeople[1].name)
  //}


  //for(let propPerson in starWarsPeople[0]){
    //console.log(propPerson)
  //}

  for (let person of starWarsPeople){
    console.log(person.name)
  }
}

main()