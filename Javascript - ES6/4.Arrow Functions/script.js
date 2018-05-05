//Arrow Functions

//IE: Array with birth years and we want to calculate the age for these
//birth years

const years = [1990, 1965, 1982, 1937];

//we can use the map method to loop over the array and then do stuff with it


//ES5
var ages5 = years.map(function(el){
  return 2016 - el;
});
console.log(ages5);//26,51,34,79

//ES6
const ages6 = years.map(el => 2016 - el);
//el is the argument
//=> operator
//return statement

//no function keyword, no return, not braces, its that simple!!
