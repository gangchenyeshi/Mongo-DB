const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/garage', 
{ useNewUrlParser: true, useUnifiedTopology: true } , () => {
    console.log('DB connected');
});


//First steps in DB is create a Schema 
const carsSchema = new mongoose.Schema({
    brand : String,
    model : String,
    year : Number,
    created : {
        type : Date,
        default : new Date()
    },
});

//Second steps in DB is Create Model
const carModel = mongoose.model('cars', carsSchema);

//CRUD
//D => DeleteMany 
// so when refresh the DB it delete the old and add new one
carModel.deleteMany({}).then(() => {
    //C => carModel.create it is in DeleteMany because other wise when you refresh the DB add Create each time when you refresh
carModel.create ([
    {
        brand : "Renauld",
        model : "Espace",
        year : 1999,
    },
    {
        brand : "Renauld",
        model : "Scenic",
        year : 2004,
    },
    {
        brand : "Peugeot",
        model : "308",
        year : 2017
    }
])
// .then((response) => console.log(response));
})

//R => carModel.find
// carModel.findById(mongoose.Types.ObjectId("60463c9a8f18a22324da2bc3"))
//     .then((response) => console.log(response));

//U =>carModel.update or updateOne/ updateMany
// carModel.updateOne(
//     {
//      model : "Espace"   
//     },
//     {
//         year:2000,
//     }
// ).then((response) => console.log(response));

//D => deleteOne / deleteMany
// carModel.deleteMany(
//     {
//         brand : "Renauld"
//     }
// ).then((response) => console.log(response));


// Add insertMany
// const carNew = [
//     {
//         brand : "marque Aston",
//         model : "DB9",                
//         year : 2010,
        // created : new Date()
//     },
//     {
//         brand : "Range Rover",
//         model : "Discovery Sport",                
//         year : 2017,
        // created : new Date()
//     }
// ];

// carModel.insertMany(carNew, {

// }).then((response) => console.log(response));



//FIND
// carModel.find(
//     {
//         year : {
//             $gt: 2015
//         }
//     }
// ).then((response) => console.log(response));

//find 
// carModel.find(
//     {
//         model: /o/g,
//     }
// ).then((response) => console.log(response));