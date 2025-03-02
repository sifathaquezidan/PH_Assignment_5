let allBtn = document.querySelectorAll(".btnComplete");


for (let i = 0; i < allBtn.length; i++) {
  const completeBtn = allBtn[i];
  completeBtn.addEventListener("click", function (event) {
    let parent = event.target.parentElement.parentElement;

    let title = parent.querySelector("h3").innerText;
    

    // Task Assigned minus
    let taskAssigned = document.getElementById("taskAssigned").innerText;
    
    taskAssigned = parseInt(taskAssigned);
    taskAssigned -= 1;
    document.getElementById("taskAssigned").innerText = taskAssigned;

    // Total Task +
    let completedTask = document.getElementById("completedTask").innerText;
    completedTask = parseInt(completedTask);
    completedTask += 1;
    document.getElementById("completedTask").innerText = completedTask;

    alert(`
        Board Updated Successfully `);

    if (taskAssigned == 0) {
      alert(`
        Congrats 🥳🥳🥳!!!
        You Have Completed All The Current Task.
        `);
    }


    // Disable Button and Bg color change
    completeBtn.setAttribute("disabled", "true");
    completeBtn.style.backgroundColor = "rgb(211, 211, 211)";

    let history = `
        <div class="bg-gray-100 px-4 py-3 rounded-md">
            <p>You Have Completed : </p>
            <h1 class="text-xl font-semibold text-gray-600"> ${title}</h1>
            <p>Time : ${getCurrentTime()}</p>
        </div>
        `;

    document
      .getElementById("historyList")
      .insertAdjacentHTML("afterbegin", history);
  });
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hours}:${formattedMinutes}:${formattedSeconds} ${period}`;
}


document.getElementById('clearHistory').addEventListener('click' , function(){
    document.getElementById('historyList').innerHTML = ''
})