// Have the function SerialNumber(str) take the str parameter being passed and
// determine if it is a valid serial number with the following constraints:
//
// 1. It needs to contain three sets each with three digits (1 through 9)
//    separated by a period.
// 2. The first set of digits must add up to an even number.
// 3. The second set of digits must add up to an odd number.
// 4. The last digit in each set must be larger than the two previous digits
//    in the same set.
//
// If all the above constraints are met within the string, the your program
// should return the string true, otherwise your program should return the
// string false. For example: if str is "224.315.218" then your program should
// return "true".

let convertToNumbers = function(arrayOfStrings) {
  return arrayOfStrings.map(Number);
};

function SerialNumber(str) {

  // Regex for format of the string (first requirement)
  let regTest  = /^[0-9]{3}.[0-9]{3}.[0-9]{3}$/;

  // Regex to test whether digits are odd or even
  let oddTest  = /^\d*[13579]$/;
  let evenTest = /^\d*[02468]$/;

  // If the str inputted doesn't match the formatting of serial, end here
  if(!regTest.test(str)) return false;

  // Split the string into the serial sets separated by the '.' for processing
  let serialSets = str.split('.');

  // Iterate through the 3 sets, and return false if any of the checks fail
  serialSets.forEach((serialSet, index) => {
    switch(index) {
      case 0:
        let digits1 = convertToNumbers(serialSet.split(''));

        if(!evenTest.test(digits1[0] + digits1[1])) {
          return false;
        }

        break;
      case 1:
        let digits2 = convertToNumbers(serialSet.split(''));

        if(!oddTest.test(digits2[0] + digits2[1])) {
          return false;
        }

        break;
      case 2:
        let digits3 = convertToNumbers(serialSet.split(''));

        if(!(digits3[2] > digits3[0] && digits3[2] > digits3[1])) {
          return false;
        }

        break;
      default:
        return false;
    }
  });

  // Returning true as the switch did not return a false case
  return true;
}
// My usual TDD suite would go here...for now, testing with other values
// console.log(SerialNumber("11.124.667"));  // returns false
// console.log(SerialNumber("114.568.112")); // returns true
// console.log(SerialNumber("23.535"));      // returns false
// console.log(SerialNumber("23.535.234"));  // returns false
// console.log(SerialNumber("235.252.236")); // returns true
// console.log(SerialNumber("23535"));       // returns false
// console.log(SerialNumber("123.124.214")); // returns true

// keep this function call here
SerialNumber(readline());
