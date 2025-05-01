'use client'
import { TextAnimate } from '@/components/magicui/text-animate'
import { AtSign, Github, Linkedin, Send, Smartphone } from 'lucide-react'
import React, { useEffect } from 'react'
import "aos/dist/aos.css"; // Подключаем стили
import AOS from "aos";
const HeroSM = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
 
		});
	}, []);
	return (
		<div className='h-screen overflow-hidden relative'>
			<div className="absolute bottom-[20px] px-[20px] z-40 text-white flex items-end justify-between w-full">
						<div className="">
							<h2>Hi, I am</h2>
							<h1 className='text-[25px] font-bold'>Yolgoshov Obidjon</h1>
							<h3 className='text-[12px]'>
								<TextAnimate animation="blurInUp" by="character" duration={5}>
									Front-end Developer / Web Developer 
								</TextAnimate>				
							</h3>
						</div>

						<div className='icons flex gap-[15px] flex-col items-center' data-aos="fade-up" >
						<a
							href='https://mail.google.com/mail/?view=cm&fs=1&to=lightline001@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<AtSign />
						</a>

						<a
							href='https://t.me/YolgoshovObidjonDev'
							target='_blank'
							rel='noopener noreferrer'
							title='Написать в Telegram'
						
						>
							<Send />
						</a>

						<a
							href='https://www.linkedin.com/in/obidjon-yolgoshev-208669319/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
							target='_blank'
							rel='noopener noreferrer'
							title='Написать в Telegram'
						
						>
							<Linkedin />
						</a>

						<a
							href='https://github.com/ObidjonFrontEnd'
							target='_blank'
							rel='noopener noreferrer'
							title='Написать в Telegram'
						
						>
							<Github />
						</a>

						<a
							href='tel:+998946970327'
							target='_blank'
							rel='noopener noreferrer'
							title='Написать в Telegram'
						
						>
							<Smartphone />
						</a>
					</div>
			</div>

			<div className="absolute bottom-0 right-[-230px]">
				<img src="me.png" alt="Yolgoshov Obidjon" className='h-[800px] min-w-[600px]' />
			</div>
			<div className="bg-[#FF8556]/35 w-[1000px] h-[300px] absolute left-[-100px] bottom-[-80px] border-[3px] border-[white]  rotate-[-10deg] ">	
			</div>
		</div>
	)
}

export default HeroSM