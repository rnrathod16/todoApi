const express = require("express");
const Task = require("./db/db");

const app = express();

app.use(express.json())

app.get("/", async(req, res) => {
    const result = await Task.find();
    res.send(result);

})

app.get("/:id", async(req, res) => {

    const id = req.params.id;
    const data = await Task.findById(id);

    res.send(data);

})

app.post("/", async(req, res) => {
    const data = new Task(req.body);
    const result = await data.save()
    res.send(result);

})

app.post("/", async(req, res) => {
    try {
        const data = new User(req.body);
        const result = await data.save();
        res.send(result);
        console.log(result);

    } catch (error) {
        console.log(error);
        res.send(error)
    }

})

app.patch("/:id", async(req, res) => {

    const id = req.params.id;
    const data = await Task.findByIdAndUpdate(id, req.body);

    res.send(data);

})

app.delete("/:id", async(req, res) => {

    const id = req.params.id;
    const data = await Task.findByIdAndDelete(id);

    res.send(data);

})




app.listen(8000, () => {
    console.log("Running on port 8000")
})