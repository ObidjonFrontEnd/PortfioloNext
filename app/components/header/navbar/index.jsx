'use client'
import NavLink from '@/app/hooks/Navlink'
import useScrollDirection from '@/app/hooks/useScrollDirection'
import useMenu from '@/app/store'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'



const NavBar = () => {
	const {isOpen , setIsOpen} = useMenu()

	
	const scrollDirection = useScrollDirection();
	
	return (
		<nav
			className={`h-[90px] mt-[20px] w-[80%] md:w-[70%] mx-auto 
      bg-[#01192f]/60 backdrop-blur-md 
      px-[25px] flex items-center md:px-[35px] 
      rounded-[100px] shadow-2xl justify-between border border-white/10
      fixed left-0 right-0 z-50 transition-transform duration-300 ${
				scrollDirection === 'down' ? 'translate-y-[120%]' : 'translate-y-0'
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
					<NavLink
						href='/about'
						className='cursor-pointer '
					>
						About
					</NavLink>
				</li>
				
				<li>
					<NavLink
						href='/tech'
						className='cursor-pointer '
					>
						My Skills
					</NavLink>
				</li>

				<li>
					<NavLink
						href='/projects'
						className='cursor-pointer '
					>
						Projects
					</NavLink>
				</li>

				<li>
					<NavLink
						href='/contact'
						className='cursor-pointer '
					>
						Contact
					</NavLink>
				</li>
			</ul>
			<div className='text-white text-[50px] md:hidden'>
				<Menu onClick={setIsOpen} />
			</div>
		</nav>
	)
}

export default NavBar
