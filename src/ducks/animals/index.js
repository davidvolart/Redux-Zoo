import { BREAK_OUT } from "./actions/breakOut";
import { RECEIVE_ANIMAL } from "./actions/receiveAnimal";
import { SET_NAME } from "../name/actions/setName";
import {SET_PRESENCE_FILTER} from "../presenceFilter/actions/setPresenceFilter"
import getPresenceFilter from "../presenceFilter/selectors/getPresenceFilter"


function reduceAnimals(state = [], action) {
    switch (action.type){
      case RECEIVE_ANIMAL: 
          for (var x=0;x<state.length;x++){
            if(state[x].present== true && state[x].name==action.name){
              return state;
            }else if(state[x].present== false && state[x].name==action.name){
                let ObjectCopy = {...state[x]}
                let arrayCopy=[...state]
                ObjectCopy.present=true;
                arrayCopy[x]=ObjectCopy;
                return arrayCopy;
            }
          }
        return [...state,{"present": true, name: action.name}]
      case BREAK_OUT:
          for (var x=0;x<state.length;x++){
            if(state[x].present== true && state[x].name==action.name){    
                let ObjectCopy = {...state[x]}
                let arrayCopy = [...state]
                ObjectCopy.present=false;
                arrayCopy[x] = ObjectCopy
                return arrayCopy;
            }
          }
          return state;
      case SET_PRESENCE_FILTER:
        switch(action.filter){
          case "present":
            let animalsFiltered = []
            for(let x=0;x<state.length;x++){
              if(state[x].present==true){
                animalsFiltered.push(state[x])
              }
            }
            return animalsFiltered;
          case "absent":
              let animalsAbsent = []
              for(let x=0;x<state.length;x++){
                if(state[x].present!=true){
                  animalsAbsent.push(state[x])
                }
              }
              return animalsAbsent;
          default:
            return state;
        }
      default:
        return state;
    }   
  }
export default reduceAnimals;
