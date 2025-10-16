const pokes = getPokes();

const type = "grass";
const answer1 = pokes
  .filter(p => p.types.includes(type))
  .map(p => p.name);

const types = ["bug", "poison"];
const answer2Or = pokes
  .filter(p => types.some(t => p.types.includes(t)))
  .map(p => p.name);

const answer2And = pokes
  .filter(p => types.every(t => p.types.includes(t)))
  .map(p => p.name);

console.log("Answer 1:", answer1);
console.log("Answer 2 (OR):", answer2Or);
console.log("Answer 2 (AND):", answer2And);

function getPokes() {
  const elScript = document.querySelector("#pokes");
  const json = elScript.text;
  const data = JSON.parse(json);
  return data;
}
