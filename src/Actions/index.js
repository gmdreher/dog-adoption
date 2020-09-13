import data from '../components/data'
export const GET_DOGS = 'GET_DOGS'
export const ADOPT_DOGS = 'ADOPT_DOGS'
export const REMOVE_DOGS = 'REMOVE_DOGS'

export function getDogs(breed) {
  const doggies = data.filter(
    dogs => 
    dogs.breed === breed)
    return { type: "GET_DOGS", payload: doggies } 
  
  
}
export function adoptDog(payload) {
  return {
    type: 'ADOPT_DOGS',
    payload
  }
}
export function removeDog(payload) {
  return {
    type: 'REMOVE_DOGS',
    payload
  }
}

