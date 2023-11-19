function solve(arr) {
  let participants = arr.shift().split(`, `);
  let command = arr.shift();

  let result = {};

  let codedNamePattern = /[A-Za-z]+/g;
  let codedNumberPattern = /\d/g;

  participants.forEach(name => result[name] = 0);

  while (command != `end of race`) {
    let nameMatches = command.match(codedNamePattern).join(``);
    let digitMatches = command.match(codedNumberPattern)
    let distance = digitMatches.map(Number).reduce((a, b) => a + b);

    if (nameMatches in result) {
      result[nameMatches] += distance;
    }

    command = arr.shift();
  }

  let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${sortedResult[0][0]}`);
  console.log(`2nd place: ${sortedResult[1][0]}`);
  console.log(`3rd place: ${sortedResult[2][0]}`);
}

solve(['George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@ ',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race']);