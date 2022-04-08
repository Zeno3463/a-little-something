import React, { useEffect, useState } from 'react'
import list from '../data/list.json'
import { TaskInterface } from '../interfaces';

const TaskList = () => {
	const [tasks, setTasks] = useState<Array<TaskInterface>>([]);

	useEffect(() => {
		if (localStorage.getItem('tasks') && localStorage.getItem('date') === new Date().getDate().toString()) {
			setTasks(JSON.parse(localStorage.getItem('tasks') as string));
			return;
		}
		const newList: Array<TaskInterface> = []
		for (let i = 0; i < parseInt(localStorage.getItem('totalTasksNum') || '0'); i++) newList.push({
			name: list[Math.random() * list.length | 0],
			done: false
		});
		setTasks(newList);
		localStorage.setItem('date', JSON.stringify(new Date().getDate()));
		localStorage.setItem('tasks', JSON.stringify(newList));
	}, [])

	const toggleDone = (index: number) => {
		const newTasks = [...tasks];
		const newTask = newTasks.splice(index, 1);
		newTask[0].done = !newTask[0].done;
		setTasks([...newTasks, newTask[0]]);
		localStorage.setItem('tasks', JSON.stringify([...newTasks, newTask[0]]));
	}

	const refreshTasks = () => {
		localStorage.removeItem('tasks');
		localStorage.removeItem('date');
		window.location.reload();
	}

	const setTotalTasksNum = (e: React.ChangeEvent<HTMLInputElement>) => {
		localStorage.setItem('totalTasksNum', parseInt(e.target.value).toString());
	}

	return <div>
		<button onClick={refreshTasks}>refresh</button>
		<input type="number" min={1} max={5} onChange={setTotalTasksNum} />
		{tasks.map((task, index) => <div key={index}>
			{!task.done ? task.name: "done"}
			<button onClick={() => toggleDone(index)}>{task.done ? "completed" : "complete"}</button>
		</div>)}
	</div>
}

export default TaskList