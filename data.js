// Asynchronous function to load injury table data in JSON format
async function loadInjuryTable() {
    // Fetch the data from the JSON file
    const response = await fetch("injuries.json");
    // Parse the JSON data
    const data = await response.json();
    // Return the data
    return data;
}

let INJURY_TABLE = null;
loadInjuryTable().then(function (data) {
    // Set the global variable to the data
    INJURY_TABLE = data;
});