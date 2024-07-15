document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const task = taskInput.value.trim();

    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'removeBtn';
        removeBtn.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}
