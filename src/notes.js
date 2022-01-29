function* generateId() {
  let id = 1;

  while (true) {
    yield id++;
  }
}

let idGenerator = generateId();

const notes = [
  {
    id: idGenerator.next().value,
    date: new Date(),
    text: "Minha primeira nota na API"
  },
  {
    id: idGenerator.next().value,
    date: new Date(),
    text: "Minha segunda nota na API"
  },
];

module.exports = { notes, idGenerator }