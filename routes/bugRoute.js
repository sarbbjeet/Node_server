const express = require("express");
var axios = require("axios");
module.exports = route = express.Router();

const bugs = [{
        id: 1,
        description: "bug 1",
        resolved: false,
    },
    {
        id: 2,
        description: "bug 2",
        resolved: true,
    },
    {
        id: 3,
        description: "bug 3",
        resolved: false,
    },
];
bugs[0].userId = "jdhjs";
// bug.userId = "hhj";
console.log(bugs);
route.get("/", async(req, res) => {
    res.json(bugs);
});
//Add bug
route.post("/", async(req, res) => {
    let bug = {...req.body };

    if (bug.resolved === undefined) bug.resolved = false;
    bug.id = Date.now();
    bugs.push(bug);
    res.json(bug);
});

//resolve bug and assigned bug
route.patch("/:bugId", async(req, res) => {
    const { bugId } = req.params;
    const { userId, resolved } = req.body;
    try {
        const index = bugs.findIndex((bug) => bug.id == bugId);
        if (resolved == true || resolved == false) bugs[index].resolved = resolved;
        if (userId) bugs[index].userId = userId;
        res.json(bugs[index]);
    } catch (ex) {
        res.status(404).json({ message: ex.message });
    }
});

// route.get("/weather", async(req, res) => {
//     var options = {
//         method: "GET",
//         url: "https://dark-sky.p.rapidapi.com/37.774929,-122.419418,2019-02-20",
//         headers: {
//             "x-rapidapi-host": "dark-sky.p.rapidapi.com",
//             "x-rapidapi-key": "c404f984a1mshb53cd7882ff72b4p1c3b7ejsnf489e60f5990",
//         },
//     };
//     try {
//         const response = await axios.request(options);
//         res.json({ response });
//     } catch (ex) {
//         res.status(400).json({ message: ex.message });
//     }
// });

// //assign bug to user
// route.patch("/:bugId", async(req, res) => {
//     const userId = req.body.userId;
//     const bugId = req.params.bugId;
//     try {
//         const index = bugs.findIndex((bug) => bug.id);
//         let bug = bugs[index];
//         bug.userId = userId;
//         bugs[index] = bug;
//         res.json({ bug: bugs[index] });
//     } catch (ex) {
//         res.status(400).json({ error: ex.message });
//     }
// });