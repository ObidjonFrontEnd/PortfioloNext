'use client'
import useScrollDirection from '@/app/hooks/useScrollDirection'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
const NavBar = () => {
	const scrollDirection = useScrollDirection();
	return (
		<nav
			className={`h-[90px] mt-[20px] w-[95%] md:w-[70%] mx-auto 
      bg-[#01192f]/60 backdrop-blur-md 
      px-[25px] flex items-center md:px-[35px] 
      rounded-[100px] shadow-2xl justify-between border border-white/10
      fixed left-0 right-0 z-50 transition-transform duration-300 ${
				scrollDirection === 'down' ? '-translate-y-[120%]' : 'translate-y-0'
			}`}
		>
			<div className='logo'>
				<Link href={`/`}>
					<Image
						src='/logo.png'
						width={100}
						height={100}
						alt='Logo_Obidjon_Dev.png'
						priority
					/>
				</Link>
			</div>

			<ul className='items-center gap-[20px] text-white hidden md:flex'>
				<li>
					<ScrollLink
						to='about'
						smooth={true}
						duration={500}
						spy={true}
						offset={-70}
						activeClass='text-[#FF8556] font-bold'
						className='cursor-pointer '
					>
						About
					</ScrollLink>
				</li>

				<li>
					<ScrollLink
						to='tech'
						smooth={true}
						duration={500}
						spy={true}
						offset={-70}
						activeClass='text-[#FF8556] font-bold'
						className='cursor-pointer '
					>
						Tech Stack
					</ScrollLink>
				</li>

				<li>
					<ScrollLink
						to='projects'
						smooth={true}
						duration={500}
						spy={true}
						offset={-70}
						activeClass='text-[#FF8556] font-bold'
						className='cursor-pointer '
					>
						Projects
					</ScrollLink>
				</li>

				<li>
					<ScrollLink
						to='contact'
						smooth={true}
						duration={500}
						spy={true}
						offset={-70}
						activeClass='text-[#FF8556] font-bold'
						className='cursor-pointer '
					>
						Contact
					</ScrollLink>
				</li>
			</ul>
			<div className='text-white text-[50px] md:hidden'>
				<Menu />
			</div>
		</nav>
	)
}

export default NavBar
