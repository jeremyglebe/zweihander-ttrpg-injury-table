let weaponType = "excess";
let hitLocation = "body";
let injuryLevel = "an";

function selectWeaponType(type) {
    // Set the weapon type
    weaponType = type;
    // Hide the weapon type controls
    document.querySelector("#weapon-type-controls").style.display = "none";
    // Determine which element to show next, controls or results
    if (weaponType === "pyromancy") {
        showResultsModal({ "name": "On Fire!", "effect": "" });
    } else {
        // Show the select hit location controls
        document.querySelector("#hit-location-controls").style.display = "block";
    }
}

function selectHitLocation(location) {
    // Set the hit location
    hitLocation = location;
    // Hide the hit location controls
    document.querySelector("#hit-location-controls").style.display = "none";
    // Show the injury level controls
    document.querySelector("#injury-level-controls").style.display = "block";
}

function selectInjuryLevel(level) {
    // Set the injury level
    injuryLevel = level;
    // Hide the injury level controls
    document.querySelector("#injury-level-controls").style.display = "none";
    // Roll the results based on selections
    showResultsModal(rollResult());
}

function rollResult() {
    // Get the array to roll from
    const arr = INJURY_TABLE[weaponType][hitLocation][injuryLevel];
    // Roll the result
    return arr[Math.floor(Math.random() * arr.length)];
}

function showResultsModal(result) {
    // Update the results title with name and parameters
    document.querySelector("#results-title").innerHTML = `<p class="title">${result.name}</p>`;
    console.log(result);
    // Create a string to display in the description
    let description = "";
    // Capitalize the weapon type, hit location, and injury level
    const weaponTypeCap = weaponType.charAt(0).toUpperCase() + weaponType.slice(1);
    const hitLocationCap = hitLocation.charAt(0).toUpperCase() + hitLocation.slice(1);
    const injuryLevelCap = injuryLevel.charAt(0).toUpperCase() + injuryLevel.slice(1);
    // Add the parameters of the injury to the description
    description += `<p><i>${injuryLevelCap} injury caused by ${weaponTypeCap} damage to the ${hitLocationCap}.</i></p>`;
    // Run a function for every key in the result object except name
    Object.keys(result).forEach(function (key) {
        if (key !== "name") {
            // Capitalize the first letter of the key
            const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
            // Add the key and value to the description string
            description += `<p><b>[${capitalizedKey}] </b> ${result[key]}</p>`;
        }
    });
    // Update the results description
    document.querySelector("#results-description").innerHTML = description;
    // Show the modal
    document.querySelector("#results-modal").classList.add("is-active");
}

function closeResultsModal() {
    // Clear all the selections
    resetParams();
    // Hide the results modal
    document.querySelector("#results-modal").classList.remove("is-active");
    // Show the weapon type controls
    document.querySelector("#weapon-type-controls").style.display = "block";
}

function resetParams() {
    weaponType = "excess";
    hitLocation = "body";
    injuryLevel = "an";
}
