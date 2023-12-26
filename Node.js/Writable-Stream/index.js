const fs = require('fs')
const path = require('path')


const filePath = path.resolve(`${__dirname}/res`, `test.docx`);
const writableStream = fs.createWriteStream(filePath);

console.log(__filename, __dirname)
writableStream.write("<html DOCTYPE=\"html\" lang=\"en\" >\n");
writableStream.write("<body>\n</body>\n");
writableStream.end("Ini adalah paragraf terakhir");
// writetable.end() digunakan untuk mengakhiri atau sebagai penanda



// so here we can write a file use wrtiableStream and that is a methode write from module core fs