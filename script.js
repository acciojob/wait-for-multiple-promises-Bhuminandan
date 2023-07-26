let promisesArr = [

  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1")
    }, Math.floor(Math.random * 3000) + 1000)
  }),

  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2")
    }, Math.floor(Math.random * 3000) + 1000)
  }),

  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 3")
    }, Math.floor(Math.random * 3000) + 1000)
  }),

]

// console.log(Promise.all(promisesArr));

const tableBody = document.getElementById("output");


Promise.all(promisesArr).then((results) => {

  tableBody.textContent = "";

  // Creating the promise name row
  results.forEach((result) => {
    const row = document.createElement("tr");
    const proCol = document.createElement("td");
    const timeCol = document.createElement("td");
 
    proCol.textContent = result;
    timeCol.textContent = (new Date() - startTime) / 1000;

    row.appendChild(proCol);
    row.appendChild(timeCol);
    tableBody.appendChild(row);

  })

  // Creating the time row for total time taken

  const timeRow = document.createElement("tr");
  const timeCol = document.createElement("td");

  const totalDuration = (new Date() - startTime) / 1000;
  timeCol.setAttribute("colspan", "2");
  timeCol.textContent = `Total: ${totalDuration.toFixed(3)}s`

  timeRow.appendChild(timeCol)
  tableBody.appendChild(timeRow);
})

const startTime =  new Date();

