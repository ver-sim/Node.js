import * as fs from 'node:fs';

const data = 'hey'

fs.writeFile('message.txt', data, 'utf-8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('saved!');
})