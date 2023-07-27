
const arr = [];

let totalTime1, totalTime2, totalTime3;
let endTime1, endTime2, endTime3;
let startTime1, startTime2, startTime3;

startTime1 = new Date().getTime();
let prom1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 1");
     endTime1 = new Date().getTime();
     totalTime1 = endTime1 - startTime1;
    //  console.log(totalTime1/1000);
  }, Math.floor(Math.random() * 3000) + 1000);
})


startTime2 = new Date().getTime();
let prom2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 2");
    endTime2 = new Date().getTime();
    totalTime2 = endTime2 - startTime2;
    //  console.log(totalTime2/1000);
  }, Math.floor(Math.random() * 3000) + 1000);
})

startTime3 = new Date().getTime();
let prom3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 3");
    endTime3 = new Date().getTime();
    totalTime3 = endTime3 - startTime3;
    //  console.log(totalTime3/1000);
  }, Math.floor(Math.random() * 3000) + 1000);
})

arr.push(prom1, prom2, prom3);
let outPut = document.getElementById("output");
let loading = document.getElementById("loading");
Promise.all(arr).then((promises) => {
  outPut.removeChild(loading);
  promises.forEach((promise) => {
    addToOutput(promise);
  })
  createTotalTimeRow();
})

let timeArr = [totalTime1, totalTime2, totalTime3];
let t = 0;


function addToOutput(promiseName) {
  let trRow =  document.createElement("tr");
  trRow.setAttribute("colspan", "2");
  let td1 =  document.createElement("td");
  td1.setAttribute("colspan", "1");
  let td2 =  document.createElement("td");
  td1.textContent = promiseName;
  let time = totalTime1 / 1000;
  td2.textContent = time;
  trRow.appendChild(td1);
  trRow.appendChild(td2);
  outPut.appendChild(trRow);
}

function createTotalTimeRow() {
  let totalRow =  document.createElement("tr");
  totalRow.setAttribute("colspan", "2");
  let totalTime = (totalTime1 / 1000) + (totalTime2 / 1000) + (totalTime3 / 1000);

  totalRow.innerHTML = `Total: ${totalTime.toFixed(3)}`;
  outPut.appendChild(totalRow);
}










