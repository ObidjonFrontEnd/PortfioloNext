'use client'

import { DotPattern } from '@/components/magicui/dot-pattern'
import NavBar from '../components/header/navbar'
import { cn } from '@/lib/utils'
const About = () => {
	return (
		<div
			id='about'
			className='w-full h-[100vh] bg-[rgb(255,133,86)] px-[10px] py-[10px] md:px-[20px] md:py-[25px]'
		>
			<div className='fixed bottom-[115px] w-full z-50'>
				<NavBar />
			</div>
			<div className='w-full h-full flex items-center justify-center bg-[#01192f] rounded-[35px] md:rounded-[50px]'>
				<DotPattern />
				<div className=' sm:w-[80%] text-center px-[15px]'>
					<h1 className='text-[rgb(255,133,86)] text-center text-[35px] font-bold sm:text-[50px] uppercase'>
						About
					</h1>
					<p className='text-white text-[12px] sm:text-[16px]'>
						👋 Hi! My name is Obidjon Yolg'oshov, and I'm a frontend developer
						passionate about building modern, user-friendly, and functional user
						interfaces.
					</p>
					<p className='text-white text-[12px] sm:text-[16px]'>
          🎓 I graduated in 2024 from the Samarkand branch of the Tashkent
						University of Information Technologies named after Al-Khwarizmi,
						specializing in IT Services. Since then, I’ve been actively growing
						in the field of web development.{' '}
					</p>
					<p className='text-white text-[12px] sm:text-[16px]'>
						💻 I work with technologies like ReactJS, TailwindCSS, and Ant
						Design, focusing on creating clean, responsive, and engaging user
						experiences. I enjoy working in collaborative teams where knowledge
						sharing and continuous learning are part of the culture.
					</p>
					<p className='text-white text-[12px] sm:text-[16px]'>
						🎯 My goal is to develop efficient, visually appealing, and
						intuitive web applications that make a real difference for users.
					</p>
					<p className='text-white text-[12px] sm:text-[16px]'>
						{' '}🧠
						I'm always open to new challenges, learning opportunities, and
						meaningful projects.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
