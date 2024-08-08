document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const btn = document.getElementById('btn');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let editingTaskId = null;

    const showTask = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, idx) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="taskDetails">
                    <strong>${task.title}</strong><br/>
                    ${task.description}<br/>
                    <small>${task.date}</small>
                </div>
                <div>
                    <button class="edit" data-id="${idx}">Edit</button>
                    <button class="delete" data-id="${idx}">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    };

    const setTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;

        if (editingTaskId !== null) {
            tasks[editingTaskId] = { title, description, date };
            editingTaskId = null;
            btn.textContent = 'Add Task';
        } else {
            tasks.push({ title, description, date });
        }

        setTasks();
        showTask();
        taskForm.reset();
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {
            const id = e.target.getAttribute('data-id');
            const task = tasks[id];
            document.getElementById('title').value = task.title;
            document.getElementById('description').value = task.description;
            document.getElementById('date').value = task.date;
            editingTaskId = id;
            btn.textContent = 'Save Task';
        } else if (e.target.classList.contains('delete')) {
            const id = e.target.getAttribute('data-id');
            tasks.splice(id, 1);
            setTasks();
            showTask();
        }
    });

    showTask();
    //localStorage.clear();
});

