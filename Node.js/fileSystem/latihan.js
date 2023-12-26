const fs = require('fs');

const readFileCallback = (err, data) => {
    if(err) {
        console.log(`file pada ${err.data} tidak dapat ditemukan!`);
        return;
    }
    console.log(data);
}

fs.readFile('latihan.txt', 'utf-8', readFileCallback);

// Secara Synchronus
const data = fs.readFileSync('hello.txt', 'utf-8');
console.log(data);