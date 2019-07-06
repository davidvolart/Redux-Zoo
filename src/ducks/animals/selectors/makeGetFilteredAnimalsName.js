import { createSelector } from "reselect";
import getAnimals from "./getAnimals";


function makeGetFilteredAnimalsName() {
  return createSelector(
    getAnimals,
    animals =>{ 
      let animalsA = []
      for(let x=0;x<animals.length;x++){
        animalsA.push(animals[x].name)
      }
      return animalsA;
    }
    
  )
}

export default makeGetFilteredAnimalsName;
