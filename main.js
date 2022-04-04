window.addEventListener('load', () => {
  const form = document.querySelector('#taskForm');
  const input = document.querySelector('#input');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const task = input.value;

      if (!task) {
          alert("Please fill the form");
          return;
      }

      const task_el = document.createElement("div");
      task_el.classList.add("task");

      const taskContent = document.createElement("div");
      taskContent.classList.add("content");
      // task_content_el.innerText = task;

      task_el.appendChild(taskContent);

      const taskInput = document.createElement("input");
      taskInput.classList.add("text");
      taskInput.type + "text";
      taskInput.value = task;
      taskInput.setAttribute("readonly", "readonly");

      taskContent.appendChild(taskInput);

      const taskAction = document.createElement("div");
      taskAction.classList.add("actions");

      const editButton = document.createElement("button");
      editButton.classList.add("edit");
      editButton.innerHTML = "edit";
      
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      deleteButton.innerHTML = "delete";

      taskAction.appendChild(editButton);
      taskAction.appendChild(deleteButton);

      task_el.appendChild(taskAction);

      taskList.appendChild(task_el);

      input.value = "";

      editButton.addEventListener('click', () => {
          if(editButton.innerText.toLowerCase() == "edit"){
              taskInput.removeAttribute("readonly");
              taskInput.focus();
              editButton.innerText = "Save";
          }else{
              taskInput.setAttribute("readonly", "readonly");
              editButton.innerText = "Edit";
          }
      });

      deleteButton.addEventListener('click', () => {
          taskList.removeChild(task_el);
      });
  });
});