function solve(arr) {
  let income = 0;

  let command = arr.shift();

  let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<qty>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d+)\$/;

  while (command != `end of shift`) {
    let match = command.match(pattern);

    if (match) {
      let { customer, product, qty, price } = match.groups;

      let totalPrice = Number(qty) * Number(price);
      income += totalPrice
      console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
    }

    command = arr.shift();
  }

  console.log(`Total income: ${income.toFixed(2)}`);
}

solve(['%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift']);