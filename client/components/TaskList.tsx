import React, { useState } from 'react'
import list from '../data/list.json'

const TaskList = () => {
	const [tasks, setTasks] = useState([
		{name: "hello", done: false},
		{name: "world", done: false},
	]);

	const toggleDone = (index: number) => {
		const newTasks = [...tasks];
		const newTask = newTasks.splice(index, 1);
		newTask[0].done = !newTask[0].done;
		setTasks([...newTasks, newTask[0]]);
	}

	return <div>
		{tasks.map((task, index) => <div key={index}>
			{!task.done ? task.name: "done"}
			<button onClick={() => toggleDone(index)}>{task.done ? "completed" : "complete"}</button>
		</div>)}
	</div>
}

export default TaskList