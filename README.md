# While You Were Coding

[![Tests](https://github.com/RickRieger/while-you-were-coding/actions/workflows/tests.yml/badge.svg)](https://github.com/RickRieger/while-you-were-coding/actions/workflows/tests.yml)

**No live site.** This exercise is a Node script that prints to the terminal, not a web page. The badge above shows the latest test run on GitHub Actions; click it to see the results.

I did this exercise at the **Code Immersives** bootcamp in New York City on **March 3, 2021**. It was forked from the instructor's repo. The directions are comments inside [`main.js`](main.js), and my answer sits under each one. The instructor's original README is kept unchanged under [Original assignment](#original-assignment-from-the-instructor) below.

## What it practices

A `while` loop repeats as long as its condition is true. You set up the counter yourself, check it, and change it each time around:

```js
let i = 1;          // 1. set the counter
while (i <= 20) {   // 2. check it
  console.log(i);
  i++;              // 3. change it (forget this and the loop never ends)
}
```

The eight challenges walk through numbers and strings with that pattern, using a string's indexes (`string[i]`) and `.length`:

| # | Task | Key idea |
| --- | --- | --- |
| 1 | 1–20, only multiples of 3 | `i % 3 === 0` |
| 2 | 20 down to 1 | count down with `i--` |
| 3 | each letter of a string | `i < string.length` |
| 4 | every third character, from the second | start at `1`, step `i += 3` |
| 5 | each letter, uppercased | `.toUpperCase()` |
| 6 | uppercase only the third word | count words by counting spaces |
| 7 | each letter backwards | start at `length - 1`, stop at `0` |
| 8 | "Here today is:" before each classmate's name | treat `\|` as "a new name starts here" |

Spaces are skipped in the letter challenges.

## Run it

```bash
node main.js       # prints every challenge
npm ci
npm run test:ci    # runs the tests once (expected: Tests: 10 passed, 10 total)
```

## How it's checked

The assignment had no tests, so I added [`main.test.js`](main.test.js). It runs `main.js`, splits the output at each `##### Challenge N #####` header, and checks exactly what each challenge printed. One more test checks that every loop is a `while` loop. **GitHub Actions** ([`.github/workflows/tests.yml`](.github/workflows/tests.yml)) runs them on Node 20 on every push and pull request. On my original 2021 code, 4 of the 10 tests fail. That's how I know they catch the bugs below.

## Cleanup log

### 2026-11-24

My commit history from that day ("updated solution", "almost", "finally finished!") shows this one took a few tries. Challenge 6 even had the comment `//Difficult to complete on time :)`. Looking at it again, three answers printed the wrong thing.

**1. Challenge 4 printed the wrong characters**

*Why:* "Starting with the second character, every third character" means indexes 1, 4, 7, 10... My loop printed index 1 and then every multiple of 3 (3, 6, 9...), so after the first letter every character was wrong. It printed `n`, ` `, `t`, `n`... instead of `n`, `g`, `t`, `g`...

Before:

```js
for(let i = 1; i <=string4.length; i++){
  if(i === 1 || i%3 === 0)
  console.log(string4[i]);
}
```

After:

```js
// start at index 1 (the second character) and jump 3 each time: 1, 4, 7, 10...
i = 1;
while (i < string4.length) {
  console.log(string4[i]);
  i += 3;
}
```

**2. Challenge 7 printed the spaces it meant to skip**

*Why:* the check `string7[i] !== ' '` looked right, but the `' '` was a **non-breaking space** (character U+00A0), probably picked up by copying from a web page. It looks identical to a normal space, but it isn't equal to one, so every real space got printed. I retyped it as a normal space. The code looks exactly the same before and after, which is what makes this kind of bug so sneaky:

```js
if(string7[i] !== ' '){   // before: the quotes held U+00A0
if (string7[i] !== ' ') {  // after: a normal space, U+0020
```

**3. Challenge 6 only worked for this one sentence, and printed `undefined`**

*Why:* to find the third word I hard-coded indexes 8 and 9 (the letters of "am"). That works here but not for any other sentence. The loop also ran to `i <= string6.length`. The last index is `length - 1`, so the final pass read past the end and printed `undefined`. It also printed spaces, unlike the other challenges. Now it counts words as it goes: every space means a new word has started.

Before:

```js
//Difficult to complete on time :)
for(let i = 0; i <=string6.length; i++){
  if(i === 8 || i === 9){
    const capLetter = string6[i].toUpperCase();
    console.log(capLetter)
  }
  else{
    console.log(string6[i])
  }
}
```

After:

```js
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
```

**4. Used `while` loops, as the assignment asks**

*Why:* the assignment is called "While Loop Challenges", but I answered every one with a `for` loop. I rewrote each as a `while` loop, added braces to the one-line `if`s, and evened out the indentation. I compared the output before and after this change and it is byte-for-byte identical, so this step changed only how the code is written.

Before (challenge 1):

```js
for (let i = 1; i <= 20; i++){
  if(i % 3 === 0)
  console.log(i);
}
```

After:

```js
i = 1;
while (i <= 20) {
  if (i % 3 === 0) {
    console.log(i);
  }
  i++;
}
```

**5. Added tests and GitHub Actions**

*Why:* so the output is checked automatically instead of by eye. This adds `package.json` (Jest 29 with a one-shot `test:ci` script), `main.test.js`, `.gitignore`, and the workflow behind the badge at the top.

**6. This README**

*Why:* the original only said "All the directions are in `main.js`." This section adds what the exercise practices, how to run and check it, and this log.

---

## Original assignment (from the instructor)

### While You Were Coding
### Some While Loop Challenges

All the directions are in `main.js`. Enjoy!
