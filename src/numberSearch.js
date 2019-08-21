// Have the function NumberSearch(str) take the str parameter,
// search for all the numbers in the string, add them together,
// then return that final number divided by the total amount of
// letters in the string.
// For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2.
// First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32.
// Then there are 17 letters in the string. 32 / 17 = 1.882, and the
// final answer should be rounded to the nearest whole number,
// so the answer is 2. Only single digit numbers separated by spaces
// will be used throughout the whole string
// (So this won't ever be the case: hello44444 world).
// Each string will also have at least one letter.

function NumberSearch(str) {
  // Regex for digit and char detection
  let digitTest     = /\d/;
  let alphaCharTest = /^[A-Za-z]+$/;

  // Filter out only valid numerical digits
  let allDigits = str.split('').filter((x) => {
    return digitTest.test(x);
  }).map(Number);

 // Filter out only a-z + A-Z chars
  let allAlphaChars = str.split('').filter((x) => {
    return alphaCharTest.test(x);
  });

  // Add all digits up
  let sumAllDigits = allDigits.reduce((a, b) => a + b, 0);

  // Return based on formula given in problem
  return Math.round(sumAllDigits / allAlphaChars.length);
}

// My usual TDD suite would go here...for now, testing with other values
// console.log(NumberSearch("H3ello9-9")); // returns 4
// console.log(NumberSearch("One Number*1*")); // returns 0
// console.log(NumberSearch("3sdf4-*=2s3")); // returns 3

// keep this function call here
NumberSearch(readline());
