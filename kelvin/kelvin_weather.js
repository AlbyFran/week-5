// The forecast today is 293. The value will stay constant
const kelvin = 293 ;

/*Celsius is 273 degrees less than Kelvin. 
We convert Kelvin to Celsius by subtracting 273 from kelvin variable */

let celsius = 'kelvin' - 273 ;

//with the following equation we calculate the Fahrenheit
let Fahrenheit = (celsius * (9/5) + 32) ;

/*converting from Celsius to fahrenheit we often get decimal numbers
so we round down the temperature*/
let fahrenheit = Math.floor ('celsius' * (9/5) + 32) ;

console.log('The temperature is ${fahrenheit} degrees Fahrenheit.') ;