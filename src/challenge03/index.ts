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

function countSteps(instructionsText: string) {
  const instructions = instructionsText.split(' ');
  let steps = 0;
  let position = 0;

  while (position > -1 && position < instructions.length) {
    const currentInstruction = Number(instructions[position]);
    steps++;
    instructions[position] = (currentInstruction + 1).toString();
    position += currentInstruction;
  }

  return steps;
}

async function main() {
  const traces = await readFile('./src/challenge03/trace.txt');
  let steps = 0;
  let finalTraceSteps = 0;

  for (let i = 0; i < traces.length; i++) {
    const currentSteps = countSteps(traces[i]);
    steps += currentSteps;
    finalTraceSteps = currentSteps;
  }

  console.log(`${steps}-${finalTraceSteps}`);
}

main().catch(console.error);
