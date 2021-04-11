const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/tasklist", { useNewUrlParser: true, useUnifiedTopology: true, createIndexes: true }).then(() => {
    console.log("Connection Successfull")
}).catch((err) => {
    console.log(err);
})


const tasksSchema = new mongoose.Schema({

    taskno: {
        type: Number,
        trim: true,
        required: true,
        unique: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    }

});

const Task = new mongoose.model("Task", tasksSchema);

module.exports = Task;