import { createSelector } from "reselect";
import getAnimals from "./getAnimals";

function makeGetFilteredAnimalsName() {
    const getPropName = (state, { name }) => name;
    return createSelector(
      getAnimals,
      getPropName,
      (animals,name)=>{
        let animal = animals.find(animal => animal.name == name);
        if(animal === undefined){
          return false;
        }else{
          return animal.present;
        }
      }
    )
}

export default makeGetFilteredAnimalsName;
