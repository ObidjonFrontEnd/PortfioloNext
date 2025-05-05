import Hero from './hero'
import HeroMD from './hero/planshet'
import HeroSM from './hero/smartphone'
import NavBar from './navbar'

const Header = () => {
	return (
		<div>
			<div className='fixed bottom-[125px] w-full z-50'>
				<NavBar />
			</div>
			<div className='hidden lg:block'>
				<Hero />
			</div>
			<div className="md:hidden">
				<HeroSM/>
			</div>
			<div className="hidden md:block lg:hidden">
				<HeroMD/>
			</div>
		</div>
	)
}

export default Header
