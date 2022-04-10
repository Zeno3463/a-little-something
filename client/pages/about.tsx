import React from 'react'

const About = () => {
	return <div>
		<div className='animate-fade-in opacity-0 text-center shadow-xl lg:text-4xl font-light bg-gradient my-5 mx-20 rounded-full p-3'>ABOUT</div>
		<div className='mx-20 p-3'>
			<h1 className='font-bold text-lg animate-bounce-in opacity-0' style={{'animationDelay': '0.1s'}}>DO SOMETHING HARD EVERYDAY!</h1>
			<br />
			<p className='animate-bounce-in opacity-0' style={{'animationDelay': '0.2s'}}><strong>A little something</strong> is a website that gets you out of your comfort zone.</p>
			<p className='animate-bounce-in opacity-0' style={{'animationDelay': '0.3s'}}>Everyday, this website will have a list of tasks for you to complete.</p>
			<p className='animate-bounce-in opacity-0' style={{'animationDelay': '0.4s'}}>All the tasks given will challenge your comfort zone. Try to complete all of them before the end of the day!</p>
			<p className='animate-bounce-in opacity-0' style={{'animationDelay': '0.5s'}}>You can change the number of tasks given each day in the settings.</p>
			<br />
			<p className='animate-bounce-in opacity-0' style={{'animationDelay': '0.6s'}}>This website is made for timathon code jam 2022 with the theme "make everyday a little less ordinary"</p>
			<p className='animate-bounce-in opacity-0' style={{'animationDelay': '0.7s'}}>This website is open source, here's the <a href="https://github.com/Zeno3463/a-little-something" className='underline' target="_blank">source code</a></p>
		</div>
	</div>
}

export default About