import React from 'react'
import Particles from 'react-tsparticles'

const Background = () => {
	return <div className='animate-fade-in opacity-0'>
		<div className='absolute bottom-0 m-14 text-xl -rotate-12 font-[Courier] font-extralight opacity-0 lg:opacity-50'>
			DO SOMETHING HARD EVERYDAY!
		</div>
		<Particles
			options={{
				fpsLimit: 120,
				interactivity: {
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.8,
							size: 6,
						},
					},
					events: {
						onHover: {
							enable: true,
							mode: 'bubble',
							parallax: {
								enable: true,
								force: 60,
							}
						}
					}
				},
				particles: {
					color: {
						value: "#e3caa5",
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 50,
					},
					opacity: {
						value: 0.2,
					},
					shape: {
						type: "circle",
					},
					size: {
						random: true,
						value: 5,
					},
				},
				detectRetina: true,
				zLayers: 1,
			}}
		/>
	</div>
}

export default Background