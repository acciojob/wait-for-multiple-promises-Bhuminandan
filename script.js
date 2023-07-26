//your JS code here. If required.
const resolvedPromises = [];

function addPromise(name, time){
  resolvedPromises.push({name:name, time:time})
}
let start1 = new Date().getTime();
let promise1 = new Promise((resolve) =>{
  setTimeout(() =>{
    resolve();
    let end1 = new Date().getTime();
    addPromise("promise1", (end1-start1)/1000);
  },2000)
});

let start2 = new Date().getTime();
let promise2 = new Promise((resolve) =>{
  setTimeout(() =>{
    resolve();
    let end2 = new Date().getTime();
    addPromise("promise1", (end2-start2)/1000);
  },1000)
});

let start3 = new Date().getTime();
let promise3 = new Promise((resolve) =>{
  setTimeout(() =>{
    resolve();
    let end3 = new Date().getTime();
    addPromise("promise1", (end3-start3)/1000);
  },3000)
});

// console.log(resolvedPromises);
let finalPromise = Promise.all([promise1, promise2, promise3]);

finalPromise.then(() =>{
  // console.log(resolvedPromises);
  addToUI(resolvedPromises);
})

finalPromise.catch((err) =>{
  console.log(err)
});

const table = document.getElementsByTagName("table")[0];
const loading = document.getElementById("loading");


function addToUI(list){
	 loading.remove();
  for(let i = 0; i<list.length; i++){

	 
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${list[i].name}</td><td>${list[i].time}</td>`;
    table.append(tr);
  }
}