import { createSelector } from "reselect";
import getAnimals from "./getAnimals";

function makeCountAbsentAnimals() {
  return createSelector(
    getAnimals,
    animals => {
      let array= [];
      for(var x=0;x<animals.length;x++){
        if(animals[x].present==false){
          array.push(animals[x])
        }
      }
      return array.length
    }
  );
}

export default makeCountAbsentAnimals;
