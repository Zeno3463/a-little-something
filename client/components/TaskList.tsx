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
		newTasks[index].done = !newTasks[index].done;
		setTasks(newTasks);
		localStorage.setItem('tasks', JSON.stringify(newTasks));
	}


	return <div>
		<table>
			{tasks.map((task, index) => <tr key={index} className='animate-bounce-in opacity-0' style={{animationDelay: `${index/5}s`}}>
				<td className='py-5 font-light border lg:border-0 text-center lg:text-left'>{!task.done ? task.name: <s>{task.name}</s>}</td>
				{!task.done ?
				<td className='pl-10 border lg:border-0'>
					<button className='bg-grey p-3 shadow-md transition-all hover:scale-110' onClick={() => toggleDone(index)}></button>
				</td> : null}
			</tr>)}
		</table>
	</div>
}

export default TaskList