import React, { useEffect, useState } from 'react'

const Settings = () => {
	const [totalTasksNum, setTotalTasksNum] = useState(0);

	useEffect(() => {
		setTotalTasksNum(parseInt(localStorage.getItem('totalTasksNum') || '0'));
	}, []);

	const updateTotalTasksNum = (e: React.ChangeEvent<HTMLInputElement>) => {
		let newNum = parseInt(e.target.value);
		if (newNum < 0) newNum = 0;
		if (newNum > 5) newNum = 5;
		setTotalTasksNum(newNum);
		localStorage.setItem('totalTasksNum', newNum.toString());
	}

	return <div>
		<div className='animation-fade-in text-center shadow-xl lg:text-4xl font-light bg-gradient my-5 mx-20 rounded-full p-3'>SETTINGS</div>
		<div className='mx-20 p-3 font-light'>
			Total tasks per day (max 5): <input value={totalTasksNum} className='bg-grey rounded text-center outline-none' type="number" min={1} max={5} onChange={updateTotalTasksNum} />
		</div>
	</div>
}

export default Settings