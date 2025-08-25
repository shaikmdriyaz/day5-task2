import express from "express";

const app = express();

app.use(express.json()) // This line imp for post,put,delete apis

const PORT = 5003;

app.get("/", (req, res) => {
    try {
        res.status(200).json({ msg : "Hello from status code"});
    }catch (error) {
        console.log(error);
        res.status(500).json({ msg: error});
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})