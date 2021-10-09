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

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}


// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. 


arrayOfPersons = [ 

  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1928",
    gender: "female"
  } ,

  {
    firstName: "Joe",
    lastName: "Fox",
    birthDate: "Apr 26, 1981",
    gender: "male"
    } ,

    {
        firstName: "Jim",
        lastName: "Bean",
        birthDate: "Aug 15, 1966",
        gender: "male"
      } ,

    ]

    // Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.
    


  for (const element of arrayOfPersons) {
    console.log('valueS:', arrayOfPersons); 
  }
  


  
 