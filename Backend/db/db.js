const mongooes = require('mongoose');

function connectToDb() {
    mongooes.connect(process.env.DB_CONNECT, 
        
    ).then( ()=>{
        console.log('Connected to Database')
    }).catch(err => console.log(err));
}

module.exports = connectToDb;