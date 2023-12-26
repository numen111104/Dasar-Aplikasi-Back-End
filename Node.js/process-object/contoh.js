const userInformation = process.env
console.log(userInformation)
// process.env.foo = 'bar';
// console.log(process.env.foo);

const memoriInformation = process.memoryUsage()
console.log(memoriInformation)

// print process.argv
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });