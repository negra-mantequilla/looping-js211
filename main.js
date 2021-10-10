// 1. Use do loop 

// let result = '';
// let num = 0

// do {
//   num = num + 1
//   result = result + ',' + num;
//   } while (num < 1000)

//   console.log(result);

  // 2. Create an object 
  // Create an object (with keys and values) called person with the following data:



  const person = {

firstName: "Jane",

lastName: "Doe",

birthDate: "Jan 5, 1925",

gender: "female"

}

// Create a function that logs out the keys and values of the object using Object.entries().




let personKeys = Object.keys(person)



console.log(Object.keys(personKeys));


// Create a function that logs out the keys and values of the object using Object.entries().

// for (const [key, value] of Object.entries(person)) {
//   console.log(`${key}: ${value}`);
// }


// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. 


arrayOfPersons = [ 

  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1928",
    gender: "Female"
  } ,

  {
    firstName: "Joe",
    lastName: "Fox",
    birthDate: "Apr 26, 1981",
    gender: "Male"
    } ,

    {
        firstName: "Jim",
        lastName: "Bean",
        birthDate: "Aug 15, 1966",
        gender: "Male"
      } ,

    ]

    // Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.
    


  


  for (const person of arrayOfPersons) {
const birthDateLength =(person.birthDate.length)
const lastDigit = (person.birthDate.charAt(birthDateLength -1))
if (parseInt(lastDigit) % 2 === 0){
  console.log('the number is even');
} else {
  console.log('The number is odd', person.birthDate);
}
    console.log('valueS:', arrayOfPersons); 
  }
  

  // Use .map() to map over the arrayOfPersons and console.log() their information.

  const map = arrayOfPersons.map(getInfo)

  function getInfo(item) {
    console.log('person info', [item.firstName, item.lastName, item.birthDate,]);
  }


  // Use .filter() to filter the persons array and console.log 0only males in the array.


 arrayOfPersons.filter(checkMale)
 function checkMale (person) {
console.log(person.gender);
if(person.gender === 'Male'){
  console.log(person.gender === 'Male');
  console.log(person);
  return person
}
 } 
 

//  Create a function that returns true if the value of birthDate is before Jan 1, 1990.

for (const person of arrayOfPersons) {
  const birthYear = person.birthDate.substring(person.birthDate.length -4)
  console.log(birthYear);
  if (parseInt(birthYear) < 1990) {
    return true
  }
}

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
