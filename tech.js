let raceNumber = Math.floor(Math.random()*1000);

let earlyRegistered = true ;

let ageRunner = 34 ;


if (ageRunner > 18 , earlyRegistered = true) {
    raceNumber += 1000;
  }

if (ageRunner > 18 , earlyRegistered = true) {
   console.log ('Hello your racing time starts at 9:30 am. Your race number is ${raceNumber}') ;
  } else if (ageRunner > 18 , earlyRegistered = false) {
      console.log('Hello your racing time starts at 11:00 am. Your race number is &{raceNumber}') ;
  }

  if (ageRunner < 18 ) {
    console.log ('Hello your racing time starts at 12:30 pm. Your race number is ${raceNumber}') ;
   } else if (ageRunner = 18 ) {
       console.log('Hello, please see the registration desk}') ;
   }