function matchPhoneNum([input]) {
  let pattern = /\+359([ -])2\1\d{3}\1\d{4}/g;

  let match = input.match(pattern);

  console.log(match.join(`, `));
}

matchPhoneNum(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);