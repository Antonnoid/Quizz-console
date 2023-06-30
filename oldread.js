const themeArr = read();

function run() {
  // let question;
  // let answer;
  let counter = 0;
  for (let i = 0; i < themeArr.length; i++) {
    const quest = readlineSync.question(`${themeArr[i][0]}${EOL}`);
    if (quest === themeArr[i][1]) {
      console.log('\x1b[42mУмница!', '\x1b[0m');
      counter += 1;
    } else {
      console.log('\x1b[41mНе умница!', '\x1b[0m');
    }
  }
  console.log(`Твои познания равны ${counter} из 5`);
}
run();