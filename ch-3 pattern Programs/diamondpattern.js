let n = 5;

for (let i = 1; i <= n; i++) {
  let str = "* ";

  let space = "  ";

  console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
}

for (let i = n - 1; i >= 1; i--) {
  let space = "  ";
  let str = "* ";

  console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
}