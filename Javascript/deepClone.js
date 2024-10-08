function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
}
const original = { name: "John", address: { city: "NYC", zip: "10001" } };
const test = original;
const copy = deepClone(original);

const original2 = [1, 2, 3, 4];
const copy2 = deepClone(original2);
copy.name = 21;

console.log(copy);
