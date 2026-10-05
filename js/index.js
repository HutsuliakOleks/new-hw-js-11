// Завдання 1
// const bankAccount = {
//   ownerName: "Oleksandr",
//   accountNumber: 2548,
//   balance: 100,
//   deposit() {
//     if (confirm("Ви хочете поповнити рахунок?")) {
//       const sum = prompt("Введіть суму поповнення:");
//       const moneyDeposit = this.balance + Number(sum);
//       console.log(moneyDeposit);
//       alert(`Баланс готівки: ${moneyDeposit}`);
//     }
//   },
//   withdraw() {
//     if (confirm("Ви хочете зняти кошти?")) {
//       const sum = prompt("Введіть суму зняття:");
//       const moneyWithdraw = this.balance - Number(sum);
//       alert(`Залишок готівки: ${moneyWithdraw}`);
//     }
//   },
// };
// bankAccount.deposit();
// bankAccount.withdraw();
// console.log(bankAccount);
// const { ownerName, accountNumber, balance } = bankAccount;
// console.log(bankAccount);
// Завдання 2
// const weather = {
//   temperature: prompt("Введіть значення температури:"),
//   humidity: 3,
//   windSpeed: 18,
//   temperatureLow() {
//     if (this.temperature < 0) {
//       let isTemperatureLow = "Температура менше за 0 градусів Цельсія";
//       alert(isTemperatureLow);
//       return true;
//     } else {
//       let isTemperatureHigh = "Температура вища або рівна 0 градусів Цельсія";
//       alert(isTemperatureHigh);
//       return false;
//     }
//   },
// };
// const { temperature, humidity, windSpeed } = weather;
// weather.temperatureLow();

// // Завдання 3
// const user = {
//   name: prompt("Введіть ім'я:"),
//   email: prompt("Введіть пошту:"),
//   password: prompt("Введіть пароль:"),
//   login() {
//     const nameLength = this.name.length;
//     const emailCheck = this.email.includes("@");
//     const passwordLength = this.password.length;
//     if (nameLength > 4 && emailCheck && passwordLength > 6) {
//       console.log("Це - дійсний логін");
//     } else {
//       console.log("Це - недійсний логін");
//     }
//   },
// };
// user.login();
// console.log(`Ім'я: ${user.name}`);
// console.log(`Пошта: ${user.email}`);
// console.log(`Пароль: ${user.password}`);
// const { name, email, password } = user;
// // Завдання 4
// const movie = {
//   title: prompt("Введіть Кіно"),
//   director: prompt("Введть Сценарій:"),
//   year: prompt("Введіть рік:"),
//   rating: prompt("Введіть оцінку"),
//   highRating() {
//     if (rating > 8) {
//       console.log("Кіно має більше ніж 8");
//     } else {
//       console.log("Кіно не має більше ніж 8");
//     }
//   },
// };
// movie.highRating();
// console.log(`Кіно: ${this.title}`);
// console.log(`Сценарій: ${this.director}`);
// console.log(`Рік: ${this.year}`);
// console.log(`Оцінка: ${this.rating}`);
// const { title, director, year, rating } = movie;
