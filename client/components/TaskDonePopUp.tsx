import Image from 'next/image'
import React from 'react'
import ResetIcon from '../public/refresh_black_24dp.svg'

const TaskDonePopUp = () => {
	////// FUNCTIONS //////
	const refreshTasks = () => {
		localStorage.removeItem('tasks');
		localStorage.removeItem('date');
		window.location.reload();
	}

	return <div className='animate-fade-in'>
		<div className='absolute left-0 top-0 z-20 animate-fade-in w-screen h-screen grid place-items-center'>
			<div className='bg-gradient shadow-xl p-24 rounded-xl text-xl font-light animate-bounce-in'>
				<p>Congratulations! You've completed all the tasks!</p>
				<button onClick={refreshTasks} className='transition-all scale-75 hover:shadow-xl hover:scale-90 block px-3 pt-2.5 p-2 my-2 bg-grey rounded-full'><Image src={ResetIcon} /></button>
			</div>
		</div>
		<div className='absolute left-0 top-0 z-10 w-screen h-screen bg-black opacity-50'></div>
	</div>
}

export default TaskDonePopUp