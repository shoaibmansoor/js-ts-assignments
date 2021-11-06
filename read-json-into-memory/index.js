const fs = require("fs");

function main() {
    const jsonString = fs.readFileSync("./assignment.json");
    const assignments = JSON.parse(jsonString);
    const items = [];
    for (const [key, value] of Object.entries(assignments.widget)) {
        items[key] = value;
    }
    console.log(items);
}

main();
