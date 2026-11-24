// ##### Introduction #####
//
// The below assignment will require NO functions
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//


// ##### Challenges #####

// Every challenge uses a while loop: set the counter, check it, change it.
// The same counter `i` is reused and reset at the start of each challenge.
let i;

console.log('##### Challenge 1 #####');
// 1.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.
// Hint: Use `if` and a modulus operation.

i = 1;
while (i <= 20) {
  if (i % 3 === 0) {
    console.log(i);
  }
  i++;
}


console.log('##### Challenge 2 #####');
// 2.
//
// Console out the numbers from 1-20. BACKWARDS.

i = 20;
while (i >= 1) {
  console.log(i);
  i--;
}

console.log('##### Challenge 3 #####');
// 3.
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
let string3 = 'Boy howdy am I good at this!';

// (spaces are skipped here and in the other letter challenges)
i = 0;
while (i < string3.length) {
  if (string3[i] !== ' ') {
    console.log(string3[i]);
  }
  i++;
}



console.log('##### Challenge 4 #####');
// 4.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
let string4 = 'And getting better every day.';

// start at index 1 (the second character) and jump 3 each time: 1, 4, 7, 10...
i = 1;
while (i < string4.length) {
  console.log(string4[i]);
  i += 3;
}


console.log('##### Challenge 5 #####');
// 5. 
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
let string5 = 'Am I the best?';

i = 0;
while (i < string5.length) {
  if (string5[i] !== ' ') {
    console.log(string5[i].toUpperCase());
  }
  i++;
}


console.log('##### Challenge 6 #####');
// 6.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
let string6 = 'Whoa, I am the best!';

// Count words as we go: every space means the next word has started.
let wordNumber = 1;
i = 0;
while (i < string6.length) {
  if (string6[i] === ' ') {
    wordNumber++;
  } else if (wordNumber === 3) {
    console.log(string6[i].toUpperCase());
  } else {
    console.log(string6[i]);
  }
  i++;
}



console.log('##### Challenge 7 #####');
// 7.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.
let string7 = 'I am become death, destroyer of worlds.';

// start at the last index (length - 1) and count down to 0
i = string7.length - 1;
while (i >= 0) {
  if (string7[i] !== ' ') {
    console.log(string7[i]);
  }
  i--;
}

console.log('##### Challenge 8 #####');
// 8.
//
const names = 'Alex|Mesuara|Brian|Chanel|Matt|Jeremy B.|Jose|Andy|Dustin|Joshua|Steve H.|Cesar|Nastya|Jeremy L.|Michael|John|Lee|Ruth|Steve M.|Tim|Ronny|Stevie R|Neo|Rick|Kyle|Minahil|Adam|Sonny|James|Daisy|Willie';

// Console out the individual letters of each person in class, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!

// The first name has no pipe in front of it, so announce it before the loop.
console.log('Here today is:');
i = 0;
while (i < names.length) {
  if (names[i] === '|') {
    console.log('Here today is:');
  } else {
    console.log(names[i]);
  }
  i++;
}
