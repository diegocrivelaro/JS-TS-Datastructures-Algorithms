import Queue from "../data-structures/Queue";

function hotPotato(elementsList: string[], num: number) {
  const queue = new Queue<string[] | any>();
  const eliminatedList = [];
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}

console.log(hotPotato(['Ana', 'Bia', 'Carlos', 'Daniel', 'Rafaela', 'Gui'], 7));