import React, { useEffect, useState } from 'react'
import list from '../data/list.json'
import { TaskInterface } from '../interfaces';
import TaskDonePopUp from './TaskDonePopUp';

const TaskList = () => {
	////// VARIABLES //////
	const [tasks, setTasks] = useState<Array<TaskInterface>>([]);
	const [allTasksAreDone, setAllTasksAreDone] = useState(false);

	////// USE EFFECTS //////
	useEffect(() => {
		// if there are tasks already set in local storage and it's not the next day, use the tasks in local storage
		if (localStorage.getItem('tasks') && localStorage.getItem('date') === new Date().getDate().toString()) {
			setTasks(JSON.parse(localStorage.getItem('tasks') as string));
			return;
		}

		// otherwise, load in new tasks
		const newList: Array<TaskInterface> = []
		for (let i = 0; i < parseInt(localStorage.getItem('totalTasksNum') || '3'); i++) newList.push({
			name: list[Math.random() * list.length | 0],
			done: false
		});
		setTasks(newList);
		localStorage.setItem('date', JSON.stringify(new Date().getDate())); // set the day
		localStorage.setItem('tasks', JSON.stringify(newList));
	}, [])

	////// FUNCTIONS //////
	const toggleDone = (index: number) => {
		const newTasks = [...tasks];
		newTasks[index].done = !newTasks[index].done;
		setTasks(newTasks);
		localStorage.setItem('tasks', JSON.stringify(newTasks));
		for (let i = 0; i < newTasks.length; i++) if (!newTasks[i].done) return;
		setAllTasksAreDone(true);
	}

	return <div>
		<table>
			{tasks.map((task, index) => <tr key={index} className='animate-bounce-in opacity-0' style={{animationDelay: `${index/5}s`}}>
				<td className='py-5 font-light text-center lg:text-left'>
					{!task.done ? task.name: <s>{task.name}</s>}
				</td>
				{!task.done ?
				<td className='pl-10'>
					<button className='bg-grey p-3 shadow-md transition-all hover:scale-110' onClick={() => toggleDone(index)}></button>
				</td> : null}
			</tr>)}
		</table>
		{allTasksAreDone ? <TaskDonePopUp /> : null}
	</div>
}

export default TaskList