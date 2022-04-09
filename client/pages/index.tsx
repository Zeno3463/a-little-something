import type { NextPage } from 'next'
import TaskList from '../components/TaskList'

const Home: NextPage = () => {
	return <div>
		<div className='animate-fade-in opacity-0 text-center shadow-xl lg:text-4xl font-light bg-gradient my-5 mx-20 rounded-full p-3'>A LITTLE SOMETHING</div>
		<div className='mx-20 p-3'>
			<TaskList />
		</div>
	</div>
}

export default Home
