const mongoose =require('mongoose'); //Exportamos modulo debe ser bajado 
//guardo la conexcion este link lo proporciona mongodb
const URI = 'mongodb+srv://SIC:UNdianuevo.12@cluster0.5jjfbhs.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(URI, { useNewUrlParser:true,  useUnifiedTopology: true})
.then(db=> console.log('BASE CONECTADA'))
.catch(err => console.log(err));


module.exports = mongoose;


