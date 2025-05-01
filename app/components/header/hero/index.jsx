'use client'
import "aos/dist/aos.css"; 
import AOS from "aos";
import { Meteors } from '@/components/magicui/meteors'
import { TextAnimate } from '@/components/magicui/text-animate'
import { AtSign, Github, Linkedin, Send, Smartphone } from 'lucide-react'
import { useEffect } from 'react'

const Hero = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000, 
			  
		});
	}, []);
	return (
		<div className='h-screen  mx-auto overflow-hidden '>
			<div className='flex h-full items-center gap-x-[60px]'>
				<div className='info text-white w-[50%] px-[20px]' data-aos="fade-right"
  				data-aos-duration="1500"
  				data-aos-delay="300">
				<Meteors number={30}  />
					<h2 className='text-[30px]'>
					<TextAnimate animation="slideUp" by="word">
							Hi, I am
    			</TextAnimate>
						
						</h2>
					<h1 className='text-[#FF8556] font-bold text-[60px] mt-[50px] '>
				
						Yolgoshov Obidjon
					</h1>
					<h3 className='text-[#909090]'>
						<TextAnimate animation="blurInUp" by="character" duration={5}>Front-end Developer / Web Developer </TextAnimate>
						
					</h3>

					<div className='icons flex gap-[15px] mt-[126px]' >
						<a
							href='https://mail.google.com/mail/?view=cm&fs=1&to=lightline001@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
							className='h-[56px] w-[61px] rounded-[50%] hover:bg-white hover:text-[#FF8556] bg-[#FF8556] duration-[0.3s] flex items-center justify-center '
						>
							<AtSign />
						</a>

						<a
							href='https://t.me/YolgoshovObidjonDev'
							target='_blank'
							rel='noopener noreferrer'
							title='Написать в Telegram'
							className='h-[56px] rounded-[50%] w-[61px] hover:bg-white hover:text-[#FF8556] bg-[#FF8556] duration-[0.3s] flex items-center justify-center '
						>
							<Send />
						</a>

						<a
							href='https://www.linkedin.com/in/obidjon-yolgoshev-208669319/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
							target='_blank'
							rel='noopener noreferrer'
							title='Написать в Telegram'
							className='h-[56px] rounded-[50%] w-[61px] hover:bg-white hover:text-[#FF8556] bg-[#FF8556] duration-[0.3s] flex items-center justify-center '
						>
							<Linkedin />
						</a>

						<a
							href='https://github.com/ObidjonFrontEnd'
							target='_blank'
							rel='noopener noreferrer'
							title='Написать в Telegram'
							className='h-[56px] rounded-[50%] w-[61px] hover:bg-white hover:text-[#FF8556] bg-[#FF8556] duration-[0.3s] flex items-center justify-center '
						>
							<Github />
						</a>

						<a
							href='tel:+998946970327'
							target='_blank'
							rel='noopener noreferrer'
							title='Написать в Telegram'
							className='h-[56px] rounded-[50%] w-[61px] hover:bg-white hover:text-[#FF8556] bg-[#FF8556] duration-[0.3s] flex items-center justify-center '
						>
							<Smartphone />
						</a>
					</div>
				</div>

				<div className='image w-[50%]'>
		
					<div className='w-[900px] h-[1200px] bg-[#FF8556] rotate-[20deg]  relative '   data-aos="fade-left"
  				data-aos-duration="1500"
  				data-aos-delay="300">
							
							<img
								src='me.png'
								alt='Yolgoshov_Obidjon'
								className='rotate-[-20deg]'
							/>
		
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default Hero
