import React, { useEffect, useState } from 'react'

const Settings = () => {
	////// VARIABLES //////
	const [totalTasksNum, setTotalTasksNum] = useState(0);

	////// USE EFFECTS //////
	useEffect(() => {
		// get total tasks num from local storage
		setTotalTasksNum(parseInt(localStorage.getItem('totalTasksNum') || '3'));
	}, []);

	////// FUNCTIONS //////
	const updateTotalTasksNum = (e: React.ChangeEvent<HTMLInputElement>) => {
		let newNum = parseInt(e.target.value);

		// limit the total tasks num to be between 0 and 5
		if (newNum < 3) newNum = 3;
		if (newNum > 6) newNum = 6;
		
		setTotalTasksNum(newNum);
		localStorage.setItem('totalTasksNum', newNum.toString());
	}

	return <div>
		<div className='animate-fade-in opacity-0 text-center shadow-xl lg:text-4xl font-light bg-gradient my-5 mx-20 rounded-full p-3'>SETTINGS</div>
		<div className='mx-20 p-3 font-light'>
			Total tasks per day (max 6): <input value={totalTasksNum} className='bg-grey rounded text-center outline-none' type="number" min={1} max={5} onChange={updateTotalTasksNum} />
		</div>
	</div>
}

export default Settings