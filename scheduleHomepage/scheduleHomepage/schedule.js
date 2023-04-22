// const sched = document.getElementById("sched");

// const tds = documents.querySelectorAll(".table-sched td");

// tds.forEach(td => td.addEventListener("click", function(evt){
//     console.log("hi",evt);
// }));
const headColorInput = document.getElementById('head-color');
const bodyColorInput = document.getElementById('body-color');
const tableElement = document.getElementById('my-table');

headColorInput.addEventListener('input', () => {
  const headColor = headColorInput.value;
  const bodyColor = bodyColorInput.value;
  tableElement.style.backgroundColor = `linear-gradient(to bottom, ${headColor} 50%, ${bodyColor} 50%)`;
});

bodyColorInput.addEventListener('input', () => {
  const headColor = headColorInput.value;
  const bodyColor = bodyColorInput.value;
  tableElement.style.backgroundColor = `linear-gradient(to bottom, ${headColor} 50%, ${bodyColor} 50%)`;
});
