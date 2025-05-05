'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({
	href,
	exact = false,
	children,
	className = '',
	activeClassName = 'text-[#ff8556] font-bold',
}) => {
	const pathname = usePathname()
	const isActive = exact ? pathname === href : pathname.startsWith(href)

	return (
		<Link
			href={href}
			className={`${className} ${isActive ? activeClassName : ''}`}
		>
			{children}
		</Link>
	)
}

export default NavLink
