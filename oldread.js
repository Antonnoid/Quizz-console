// const themeArr = read();
const Simpson = require("./simpsons");
const Alcohole = require("./alkohole");
const Grin = require("./grin");
// console.log(Simpson);
// console.log(Alcohole);
// console.log(Grin);
const readlineSync = require("readline-sync");
const { EOL } = require("os");
const { readFileSync } = require("fs");
const { arrayBuffer } = require("stream/consumers");

const userName = readlineSync.question(`Введите имя ${EOL}`);

console.log(`Привет ${userName}!`);
let arrResult = [];
const choose = readlineSync.question(`Выберите тему:
1. Симпсоны
2. Алкоголь
3. Зеленый Слоник
`);
if (choose === "1") {
  arrResult = [...Simpson];
}
if (choose === "2") {
  arrResult = [...Alcohole];
} else {
  choose === "3";
  arrResult = [...Grin];
}
// console.log(arrResult);
function run() {
  let count = 0;
  for (let i = 0; i < arrResult.length; i += 1) {
    const quest = readlineSync.question(`${arrResult[i].question}${EOL}`);
    if (quest === arrResult[i].answer) {
      console.log("\x1b[42mВозьми с полки пирожок!", "\x1b[0m");
      count += 2;
    } else {
      console.log("\x1b[41mА вот и нет!", "\x1b[0m");
      console.log(`Правильный ответ: ${arrResult[i].answer}`);
      count -= 1;
    }
    console.log(`твой результат ${count} пирожков`);
    return count;
  }
  run();
  //   // let question;
  //   // let answer;
  //   let counter = 0;
  //   for (let i = 0; i < themeArr.length; i++) {
  //     const quest = readlineSync.question(`${themeArr[i][0]}${EOL}`);
  //     if (quest === themeArr[i][1]) {
  //       console.log('\x1b[42mУмница!', '\x1b[0m');
  //       counter += 1;
  //     } else {
  //       console.log('\x1b[41mНе умница!', '\x1b[0m');
  //     }
  //   }
  //   console.log(`Твои познания равны ${counter} из 5`);
}
run();
