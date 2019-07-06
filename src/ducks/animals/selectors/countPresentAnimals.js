import getAnimals from "./getAnimals";

function countPresentAnimals(state) {
  let i=0;
  let animals= getAnimals(state)
  for(var x=0;x<animals.length;x++){
    if(animals[x].present==true){
      i++;
    }
  }
  return i;
}

export default countPresentAnimals;


