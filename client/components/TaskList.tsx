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
		for (let i = 0; i < 5; i++) newList.push({
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

	return <div>
		{tasks.map((task, index) => <div key={index}>
			{!task.done ? task.name: "done"}
			<button onClick={() => toggleDone(index)}>{task.done ? "completed" : "complete"}</button>
		</div>)}
	</div>
}

export default TaskList