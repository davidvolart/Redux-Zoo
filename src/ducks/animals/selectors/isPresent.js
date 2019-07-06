function isPresent(state,animal){
  let animals = state.animals;
  for(var i=0;i<animals.length;i++){
    if(animals[i].name==animal.name && animals[i].present==true){
        return true
    }
  }
  return false;
}

export default isPresent;
