import * as fs from 'fs/promises';

async function readFile(path: string) {
  let result: string[] = [];
  try {
    const content = await fs.readFile(path, 'utf-8');
    result = content.split('\n');
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
  return result;
}

function validateAttempt(attempt: string) {
  let isIA = true;
  let haveLetters = false;
  let maxNumber = 0;
  let maxLetter = 'a';

  for (let i = 0; i < attempt.length && isIA; i++) {
    const isNumber = !isNaN(Number(attempt[i]));
    const isLowercase = attempt[i] === attempt[i].toLowerCase();

    if (isNumber) {
      const currentNumber = Number(attempt[i]);
      if (haveLetters || currentNumber < maxNumber) {
        isIA = false;
      }
      maxNumber = currentNumber;
    } else if (isLowercase) {
      haveLetters = true;
      if (attempt[i] < maxLetter) {
        isIA = false;
      }
      maxLetter = attempt[i];
    } else {
      isIA = false;
    }
  }

  return isIA;
}

async function main() {
  const tests = await readFile('./src/challenge02/log.txt');
  let valid = 0;
  let invalid = 0;

  for (const test of tests) {
    if (validateAttempt(test)) {
      valid++;
    } else {
      invalid++;
    }
  }

  console.log(`${valid}true${invalid}false`);
}

main().catch(console.error);
