import { createSelector } from "reselect";
import getAnimals from "./getAnimals";

function makeGetAnimalsName() {
  return createSelector(
    getAnimals,
    animals => {
        let animalsA = []
        for(let x=0;x<animals.length;x++){
            animalsA.push(animals[x].name);
        }
        return animalsA;
    }
  )
}

export default makeGetAnimalsName;
