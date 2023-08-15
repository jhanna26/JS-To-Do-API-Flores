let task = document.querySelector("#task");
let date = document.querySelector("#date");
let taskList = document.querySelector("#taskList");

let addTaskBtn = document.querySelector("#addTaskBtn");
let btnDelete = document.querySelector("#btnDelete");


let toDos = JSON.parse(localStorage.getItem("entries"));

// console.log(toDo);

let list = "";
if (toDos == null){
    list = `<p id="warning">No Task Added</p>`
} else{
  toDos.forEach((x) => {
        list += `<tr> ${x.toDoTaskValue} ${x.toDoDateValue} ${x.deleteBtnValue} </tr>`;
    })
}

// console.log(list);
taskList.innerHTML = list;

let addTask = () => {
 let n = localStorage.getItem("idVal");
 n = ++n;

    if (toDos == null){
        toDos = [];
    }
    let toDo = {
       toDoTaskValue: task.value,
       toDoDateValue: date.value,
       id: n,
       deleteBtnValue:`<button id="deleteBtn">Delete</button>`
       
    }
    toDos.push(toDo);
    console.log(toDo);

    localStorage.setItem("entries", JSON.stringify(toDos));
    localStorage.setItem("idVal", n)


    if (toDos.length ==1){
        let warning = document.querySelector("#warning");
        warning.style.display = "none"
    }
    let item =document.createElement("tr");
    item.innerHTML=`${toDo.toDoTaskValue} ${toDo.toDoDateValue} ${toDo.deleteBtnValue}`;
   
    taskList.appendChild(item);
   
    deleteBtn.addEventListener("click", deleteTask)

}
function deleteTask(){
    let deleteBtn = document.querySelector("#deleteBtn");
    let tr = event.target.parentNode.parentNode;
    let rowId = tr.id;

    tr.remove();

    toDos = toDos.filter((obj) => obj.id != rowId);

    localStorage.setItem("toDos", JSON.stringify(toDos));

    if (toDos.length ==0) {
        noDatarow()
    }
}

let clear = () => {
    localStorage.clear();
    taskList.innerHTML = "";
}


clearBtn.addEventListener("click", clear);
addTaskBtn.addEventListener("click", addTask);