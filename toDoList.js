let inputData = document.getElementById("input-data");
let tasksList = document.getElementById("tasks-list");

function addTask(){

    if(inputData.value === "")
    {
        alert("Task can not be blank");
    }
    else
    {
        let li = document.createElement("li")
        li.innerHTML = inputData.value;
        tasksList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '&#10004;';
        li.appendChild(span);

        let span1 = document.createElement("span1");
        span1.innerHTML = '&#10008;';
        span1.style.marginLeft = "10px";
        span.appendChild(span1);


    }
    inputData.value = "";
    saveData();
}

tasksList.addEventListener("click", function(e){
 
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.classList.toggle('ticked');
        saveData();
    }

    else if(e.target.tagName === "LI"){
        e.target.classList.toggle('ticked');
        saveData();
    }

    else if(e.target.tagName === "SPAN1"){
        e.target.parentElement.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("dataa",tasksList.innerHTML);
}

function showData(){
    tasksList.innerHTML = localStorage.getItem("dataa");
}

showData();
