const { error } = require("console");
const fs = require("fs");
const { set } = require("lodash");

// Menggunakan callback
fs.readFile('hello.txt', 'utf-8', (error, data) => {
    if (error) {
      console.log(`file pada ${error.data} Kaga ada anjj`);
      return;
    }
    console.log(data);
  });


  // Menggunakan promise
fs.promises.readFile('hello.txt', 'utf-8')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`file pada ${error.data} Kaga ada anjj`);
  })

  // Menggunakan async await
  async function readFile() {
    try {
      const data = await fs.promises.readFile('hello.txt', 'utf-8');
      console.log(data);
    } catch (error) {
      console.log(`file pada ${error.data} Kaga ada anjj`);
    }
    
  }

  readFile()

  //menggunakan synchronous
  const data = fs.readFileSync('hello.txt', 'utf-8');
  console.log(data);

  // setInterval(readFile, 2000)
  // clearInterval(readFile)