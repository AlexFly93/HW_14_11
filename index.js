// homework
// 1) Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

// зробити двома способами через while і for

// * це повинна бути функція(можливо і не одна)

//              способ с while

const enterRightNumber = function () {
  let count = 0;
  while (true) {
    const result = Number(prompt("enter right number"));
    count++;
    if (count > 2) {
      console.log("error");
      break;
    }
    if (
  result > 15 &&
  result < 35 &&
  result % 6 === 0
) {
      console.log("welcome");
      break;
    }
  }
};

enterRightNumber();

//              способ с for

for (let i = 0; i < 3; i++) {
  const result = Number(prompt("enter right number"));
    if (result > 15 && result < 35 && result % 6 === 0) {
        console.log("it's right number")
        break
    }
    console.log( 'try again')
}
