import {getPeople} from './starWarsService'

async function main(){
  const starWarsPeople = await getPeople(1)
  const totalHeigth = starWarsPeople.reduce((total, person)=>{
    total += Number(person.height)
    return total
  }, 0)
  
    
    console.log(`média de altura: ${totalHeigth} / ${starWarsPeople.length}`  )
  
  }


main()