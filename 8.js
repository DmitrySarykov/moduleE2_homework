var fruits = new Map([
    ["name", "Tuffy"],
    ["age", 2],
    ["speed", 10]
  ]);

for (let key of fruits.keys()) { // Перебор по каждому ключу
    console.log(`Ключ — ${key}, значение — ${fruits.get(key)}`);
};