const tableBody = document.querySelector("#output");

// Creating a randome promises that resolves at randome time between 1 to 3 sec

const promises = [

    new Promise((resolve) => setTimeout(() => resolve("Promise 1"),Math.floor(Math.random()*3000)+1000)),
    new Promise((resolve) => setTimeout(() => resolve("Promise 2"),Math.floor(Math.random()*3000)+1000)),
    new Promise((resolve) => setTimeout(() => resolve("Promise 3"),Math.floor(Math.random()*3000)+1000)),

];

// Adding a row that has span of two columns with text "Loading..."

const loadingRow = document.createElement("tr");
const loadingCol = document.createElement("td");
loadingCol.setAttribute("colspan", "2");
loadingCol.textContent = "Loading...";
loadingRow.appendChild(loadingCol);
tableBody.appendChild(loadingRow);

Promise.all(promises).then((results) => {

    // Removing existing loading rows
    tableBody.removeChild(loadingRow);

    results.forEach((results) => {
        const row = document.createElement("tr");
        const promiseCell = document.createElement("tr");
        const timeCell = document.createElement("tr");

        promiseCell.textContent = results;
        timeCell.textContent = (new Date() - startTime) / 1000; // Calculating the time taken in seconds
        row.appendChild(promiseCell);
        row.appendChild(timeCell);
        tableBody.appendChild(row);
    });

    // Calculate total time taken and add a row for it
    const totalTimeRow = document.createElement("tr");
    const totalTimeCell = document.createElement("td");
    const totalDuration = (new Date() - startTime) / 1000;
    totalTimeCell.setAttribute("colspan", "2");
    totalTimeCell.textContent = `Total: ${totalDuration.toFixed(3)}s`;
    totalTimeRow.appendChild(totalTimeCell);
    tableBody.appendChild(totalTimeRow);

})

// Save start time for calculating time taken
const startTime = new Date();
