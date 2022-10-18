// code your solution here
function saturdayFun (activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(todo = 'go to the office'){
    return `This Monday, I will ${todo}.`
}


function wrapAdjective(special){
  
   return function createSpecial(word){
      return(`You are ${special}${word}${special}!`);
    }


  }
