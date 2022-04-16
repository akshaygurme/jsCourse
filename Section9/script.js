'use strict';

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // const players1 = [...game.players[0]];
// // const players2 = [...game.players[1]];
// const [players1, players2] = game.players;

// console.log(players1);
// console.log(players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // 4.
// const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
// // console.log(players1Final);

// // 5.
// // const team1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;

// // const {team1,draw,team2}=game.odds:{team1,x,team2};

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// // console.log(team1, draw, team2);

// //  6.
// const printGoals = function (...players) {
//   let goals = 0;
//   //   console.log(game.scored);
//   for (let i = 0; i < players.length; i++) {
//     for (let j = 0; j < game.scored.length; j++) {
//       players[i] === game.scored[j] && goals++;
//     }
//     console.log(players[i], goals);
//     goals = 0;
//   }
//   //   console.log(game.scored.length);
// };

// printGoals(...players1);

// //  7.

// game.odds.team1 < game.odds.team2 ||
//   console.log('Team 2 is more likely to WIN 🏆');

// game.odds.team1 > game.odds.team2 ||
//   console.log('Team 1 is more likely to WIN 🏆');

// game.odds.team1 < game.odds.team2 &&
//   console.log('Team 1 is more likely to WIN 🏆');

// game.odds.team1 > game.odds.team2 &&
//   console.log('Team 2 is more likely to WIN 🏆');

// // for (const items of allPlayers) console.log(items);

// const student = {
//   firstName: 'Akshay',
//   lastName: 'Gurme',
// };

// const school = {
//   address: 'Aurnagabad',
//   student,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// console.log(school);

// const restaurant = {
//   mon: { start: '10.00', close: '18.00' },
//   thu: { start: '11.00', close: '19.00' },
// };

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   console.log(
//     `On ${day} Restaurant ${
//       restaurant[day]?.start === undefined
//         ? 'is not open'
//         : `Starts at ${restaurant[day]?.start}`
//     }`
//   );
// }

// Coding challenge 2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// console.log('--------1----------');
// let i = 0;
// // console.log(Object.entries(game.scored));
// for (const [goalsNo, player] of Object.entries(game.scored)) {
//   i++;
//   console.log(`Goal ${Number(goalsNo) + 1}: ${player}`);
// }

// // 2.
// console.log('--------2----------');
// let averageOdds = 0;
// for (const odd of Object.values(game.odds)) {
//   averageOdds += Number(odd);
//   // console.log(odd);
// }
// // console.log(averageOdds);
// console.log(`Average Odds = ${averageOdds / Object.entries(game.odds).length}`);

// // 3.
// console.log('--------3----------');
// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// console.log(`Odd of draw: ${game.odds.x}`);
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// // 4.
// console.log('--------4----------');

// // const scorers = {
// //   [game.scored[1]]: 1,
// //   [game.scored[2]]: 1,
// //   [game.scored[0]]: 2,
// // };

// const scorers = {};

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

///// Practise

const arr = ['one', 'two', 'three', 'four', 'four'];

console.log(new Set(arr).size);
