'use client'
import React from 'react'
import NavBar from '../components/header/navbar'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import 'aos/dist/aos.css'; 

const Tech = () => {



	return (
		<div className='w-full min-h-screen overflow-hidden bg-[rgb(255,133,86)] px-[10px] py-[10px] md:px-[20px] md:py-[25px]'>
			<div className='fixed bottom-[115px] w-full z-50 ' >
				<NavBar />
			</div>

			<div className='py-[50px]  h-full bg-[#01192f] rounded-[35px] md:rounded-[50px]'>
				<div className='w-[80%] mx-auto'>
					<h1 className='text-[rgb(255,133,86)]  text-center text-[25px] font-bold sm:text-[50px] uppercase  mb-[40px]'>
						My Skills
					</h1>
					<div className='grid grid-cols-2 text-[12px] sm:text-[16px] md:grid-cols-3 lg:grid-cols-4 mx-auto gap-[15px]'>

						<div className='mx-auto h-[150px] text-white flex flex-col items-center gap-[10px]'>
							<CircularProgressbar
								value={95}
								text={`95%`}
								styles={buildStyles({
									textColor: 'rgb(255,133,86)',
									pathColor: 'rgb(255,133,86)',
									trailColor: '#e5e7eb',
								})}
							/>
							<p>HTML</p>
						</div>

						<div className='mx-auto h-[150px] text-white flex flex-col items-center gap-[10px]'>
							<CircularProgressbar
								value={90}
								text={`90%`}
								styles={buildStyles({
									textColor: 'rgb(255,133,86)',
									pathColor: 'rgb(255,133,86)',
									trailColor: '#e5e7eb',
								})}
							/>
							<p>CSS</p>
						</div>
						
						<div className='mx-auto h-[150px] text-white flex flex-col items-center gap-[10px]'>
							<CircularProgressbar
								value={90}
								text={`90%`}
								styles={buildStyles({
									textColor: 'rgb(255,133,86)',
									pathColor: 'rgb(255,133,86)',
									trailColor: '#e5e7eb',
								})}
							/>
							<p>SASS</p>
						</div>

						<div className='mx-auto h-[150px] text-white flex flex-col items-center gap-[10px]'>
							<CircularProgressbar
								value={90}
								text={`90%`}
								styles={buildStyles({
									textColor: 'rgb(255,133,86)',
									pathColor: 'rgb(255,133,86)',
									trailColor: '#e5e7eb',
								})}
							/>
							<p className='uppercase'>tailwindcss</p>
						</div>

						<div className='mx-auto h-[150px] text-white flex flex-col items-center gap-[10px]'>
							<CircularProgressbar
								value={75}
								text={`75%`}
								styles={buildStyles({
									textColor: 'rgb(255,133,86)',
									pathColor: 'rgb(255,133,86)',
									trailColor: '#e5e7eb',
								})}
							/>
							<p className='uppercase'>REACT.js</p>
						</div>
							
						<div className='mx-auto h-[150px] text-white flex flex-col items-center gap-[10px]'>
							<CircularProgressbar
								value={75}
								text={`75%`}
								styles={buildStyles({
									textColor: 'rgb(255,133,86)',
									pathColor: 'rgb(255,133,86)',
									trailColor: '#e5e7eb',
								})}
							/>
							<p className='uppercase'>next.js</p>
						</div>
						
						<div className='mx-auto h-[150px] text-white flex flex-col items-center gap-[10px]'>
							<CircularProgressbar
								value={60}
								text={`60%`}
								styles={buildStyles({
									textColor: 'rgb(255,133,86)',
									pathColor: 'rgb(255,133,86)',
									trailColor: '#e5e7eb',
								})}
							/>
							<p className='uppercase'>gitHub</p>
						</div>
						

						<div className='mx-auto h-[150px] text-white flex flex-col items-center gap-[10px]'>
							<CircularProgressbar
								value={99}
								text={`99%`}
								styles={buildStyles({
									textColor: 'rgb(255,133,86)',
									pathColor: 'rgb(255,133,86)',
									trailColor: '#e5e7eb',
								})}
							/>
							<p className='uppercase'>VS Code</p>
						</div>

						<div className='mx-auto h-[150px] text-white flex flex-col items-center gap-[10px]'>
							<CircularProgressbar
								value={90}
								text={`90%`}
								styles={buildStyles({
									textColor: 'rgb(255,133,86)',
									pathColor: 'rgb(255,133,86)',
									trailColor: '#e5e7eb',
								})}
							/>
							<p className='uppercase'>postman</p>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Tech
