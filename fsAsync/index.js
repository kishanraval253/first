const fs = require("fs");

fs.writeFile("kishan.txt", "aa badho aek data che", (err) => {

    fs.appendFile("kishan.txt", " ha to ae to khabar j che", (err) => {

        console.log("Files done");
    });
    console.log(err);
});

