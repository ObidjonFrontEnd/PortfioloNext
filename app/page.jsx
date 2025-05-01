import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Projects from './components/projects'
import Tech from './components/tech'

export default function Home() {
	return (
		<div className='bg-[#01192f] w-full'>
			<Header />
			<section id='about' className='h-screen w-full mt-[110px]'>
				{/* <About /> */}
			</section>

			<section id='tech' className='h-screen '>
				<Tech />
			</section>

			<section id='projects' className='h-screen '>
				<Projects />
			</section>

			<section id='contact' className='h-screen '>
				<Contact />
			</section>

			<Footer />
		</div>
	)
}
