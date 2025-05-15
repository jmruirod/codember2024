import * as fs from 'fs/promises';

async function readFile(path: string) {
  let content: string = '';
  try {
    content = await fs.readFile(path, 'utf-8');
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
  return content;
}

function getGraph(nodePairs: string[][]) {
  const graph = new Map<number, number[]>();

  for (const nodePair of nodePairs) {
    const nodeA = Number(nodePair[0]);
    const nodeB = Number(nodePair[1]);

    if (!graph.has(nodeA)) graph.set(nodeA, []);
    if (!graph.has(nodeB)) graph.set(nodeB, []);

    graph.get(nodeA)!.push(nodeB);
    graph.get(nodeB)!.push(nodeA);
  }

  return graph;
}

function findConnectedNodes(graph: Map<number, number[]>): number[][] {
  const visited = new Set<number>();
  const nodes: number[][] = [];

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      const component: number[] = [];
      const queue: number[] = [node];
      visited.add(node);

      while (queue.length > 0) {
        const currentNode = queue.shift()!;
        component.push(currentNode);

        for (const neighbor of graph.get(currentNode)!) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }

      nodes.push(component);
    }
  }

  return nodes;
}

async function main() {
  const networkText = await readFile('./src/challenge04/network.txt');
  const nodePairs = networkText
    .replace('[[', '')
    .replace(']]', '')
    .split('],[')
    .map((pair) => pair.split(','));

  const graph = getGraph(nodePairs);
  const connectedNodes = findConnectedNodes(graph);

  const safeNodes: number[] = [];
  for (const node of connectedNodes) {
    if (node.length < 3) {
      safeNodes.push(...node);
    }
  }

  console.log(safeNodes.join(','));
}

main().catch(console.error);
