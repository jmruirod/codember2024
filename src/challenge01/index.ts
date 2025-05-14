import * as readline from 'readline';

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function decode(code: string, actions: string) {
  let codeIndex = 0;
  const codeArray = code.split('');

  for (const action of actions) {
    const number: number = Number(codeArray[codeIndex]);
    switch (action) {
      case 'R':
        codeIndex = (codeIndex + 1) % code.length;
        break;
      case 'L':
        codeIndex = (codeIndex - 1 + code.length) % code.length;
        break;
      case 'U':
        codeArray[codeIndex] = ((number + 1) % 10).toString();
        break;
      case 'D':
        codeArray[codeIndex] = ((number - 1 + 10) % 10).toString();
        break;
    }
  }

  return codeArray.join('');
}

read.question('Introduce la secuencia: ', (sequence) => {
  const [code, actions] = sequence.split(' ');
  console.log(decode(code, actions));
  read.close();
});
