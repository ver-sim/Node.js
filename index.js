const figlet = require('figlet');

figlet('Hola', (err, data) => {
    if(err){
        console.log('something went wrong...ops');
        console.dir(err);
    }
    console.log(data);
});