const fs = require('fs');
 
const readableStream = fs.createReadStream('./artimcle.txt', {
    highWaterMark: 132
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read(12)}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});