module.exports = () => {
    const Mongoose = require("mongoose");

    //connection
    Mongoose.connect(process.env.MONGOOES_PATH!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err: any) => err
        ? console.log("Enable to connect to the database due to:", err)
        : console.log("MongoDB connection sucessfull!"));
}