import React, { useState } from 'react'
import Image from 'next/image'
import MenuIcon from '../public/menu_black_24dp.svg'
import ResetIcon from '../public/refresh_black_24dp.svg'
import AboutIcon from '../public/question_mark_black_24dp.svg'
import SettingsIcon from '../public/settings_black_24dp.svg'
import HomeIcon from '../public/home_black_24dp.svg'

const Menu = () => {
	////// VARIABLES //////
	const [isOpen, setIsOpen] = useState(false);

	////// FUNCTIONS //////
	const refreshTasks = () => {
		if (!localStorage.getItem('alerted')) {
			if (!confirm('This will reset all your tasks for the day. Are you sure?')) return;
			localStorage.setItem('alerted', 'true');
		}
		localStorage.removeItem('tasks');
		localStorage.removeItem('date');
		window.location.reload();
	}

	return <div className='animate-fade-in opacity-0'>
		<div className='absolute hover:cursor-pointer transition-all right-0 bottom-0 shadow-xl hover:scale-110 m-10 bg-gradient rounded-full px-3 pt-2.5 p-2' onClick={() => setIsOpen(!isOpen)}>
			<Image src={MenuIcon} width={30} height={30} />
		</div>
		<div className={`${isOpen ? 'block' : 'hidden'} m-10 mb-24 mr-11 absolute right-0 bottom-0`}>
			<button onClick={refreshTasks} className='animate-bounce-in transition-all hover:shadow-xl hover:scale-105 block px-3 pt-2.5 p-2 my-2 bg-grey rounded-full'><Image src={ResetIcon} /></button>
			<a href='/settings' className='animate-bounce-in transition-all hover:shadow-xl hover:scale-105 block px-3 pt-2.5 p-2 my-2 bg-grey rounded-full'><Image src={SettingsIcon} /></a>
			<a href='/about' className='animate-bounce-in transition-all hover:shadow-xl hover:scale-105 block px-3 pt-2.5 p-2 my-2 bg-grey rounded-full'><Image src={AboutIcon} /></a>
			<a href='/' className='animate-bounce-in transition-all hover:shadow-xl hover:scale-105 block px-3 pt-2.5 p-2 my-2 bg-grey rounded-full'><Image src={HomeIcon} /></a>
		</div>
	</div>
}

export default Menu