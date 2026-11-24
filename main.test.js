// Tests added during the 2026 cleanup (the assignment had no tests).
// They run main.js like `node main.js` and check what each challenge prints.
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'main.js');

// Split the printed output into { 1: [...lines], 2: [...lines], ... }
const output = execFileSync(process.execPath, [file], { encoding: 'utf8' }).trim().split(/\r?\n/);
const challenges = {};
let current = null;
for (const line of output) {
  const m = line.match(/^##### Challenge (\d+) #####$/);
  if (m) {
    current = Number(m[1]);
    challenges[current] = [];
  } else if (current !== null) {
    challenges[current].push(line);
  }
}

// Each character of a string, skipping spaces
const letters = (s) => [...s].filter((c) => c !== ' ');

describe('printed output', () => {
  it('prints all 8 challenges', () => {
    expect(Object.keys(challenges).map(Number)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('1: the numbers from 1 to 20 divisible by 3', () =>
    expect(challenges[1]).toEqual(['3', '6', '9', '12', '15', '18']));

  it('2: 20 down to 1', () =>
    expect(challenges[2]).toEqual(Array.from({ length: 20 }, (_, k) => String(20 - k))));

  it('3: each letter, no spaces', () =>
    expect(challenges[3]).toEqual(letters('Boy howdy am I good at this!')));

  it('4: every third character, starting with the second (indexes 1, 4, 7...)', () =>
    expect(challenges[4]).toEqual(['n', 'g', 't', 'g', 'e', 'e', 'e', 'r', 'd', '.']));

  it('5: each letter uppercased', () =>
    expect(challenges[5]).toEqual(letters('AM I THE BEST?')));

  it('6: the third word uppercased, and nothing undefined at the end', () =>
    expect(challenges[6]).toEqual(letters('Whoa, I AM the best!')));

  it('7: each letter backwards, starting with ".", "s", "d", and no spaces', () => {
    expect(challenges[7]).toEqual(letters('I am become death, destroyer of worlds.').reverse());
    expect(challenges[7].slice(0, 3)).toEqual(['.', 's', 'd']);
  });

  it('8: "Here today is:" before each name, and no pipes', () => {
    const names = 'Alex|Mesuara|Brian|Chanel|Matt|Jeremy B.|Jose|Andy|Dustin|Joshua|Steve H.|Cesar|Nastya|Jeremy L.|Michael|John|Lee|Ruth|Steve M.|Tim|Ronny|Stevie R|Neo|Rick|Kyle|Minahil|Adam|Sonny|James|Daisy|Willie';
    const expected = names.split('|').flatMap((name) => ['Here today is:', ...name]);
    expect(challenges[8]).toEqual(expected);
    expect(challenges[8]).not.toContain('|');
  });
});

describe('the code', () => {
  it('uses while loops, not for loops (the assignment is "While Loop Challenges")', () => {
    const code = fs.readFileSync(file, 'utf8').replace(/\/\/.*$/gm, '');
    expect(code).not.toMatch(/\bfor\s*\(/);
    expect(code.match(/\bwhile\s*\(/g)).toHaveLength(8);
  });
});
