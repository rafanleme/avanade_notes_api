const notes = [];

function* generateId() {
  let id = 1;

  while (true) {
    yield id++;
  }
}

let idGenerator = generateId();

module.exports = { notes, idGenerator }