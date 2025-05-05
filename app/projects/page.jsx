'use client'
import React from 'react'
import NavBar from '../components/header/navbar'
import { Avatar, Card } from 'antd'
import { Link2, Github } from 'lucide-react'

import { Ellipsis } from 'lucide-react'
import { useRouter } from 'next/navigation'

const { Meta } = Card

const Projects = () => {
	const router = useRouter()
	return (
		<div className='w-full min-h-[100vh] bg-[rgb(255,133,86)] px-[10px] py-[10px] md:px-[20px] md:py-[25px]'>
			<div className='fixed bottom-[115px] w-full z-50'>
				<NavBar />
			</div>

		<div className='w-full  bg-[#01192f] rounded-[35px] md:rounded-[50px] p-[20px] pb-[80px] '>
				<h1 className='text-[rgb(255,133,86)] text-center text-[35px] font-bold sm:text-[50px] uppercase mb-[40px]'>
					Projects
				</h1>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 shadow-2xl  lg:grid-cols-4 gap-[20px] '>
					<Card className=''
						style={{ width: '100%' }}
						cover={
							<div className='h-[170px] group overflow-hidden'>
								<img
								alt='example'
								src='GreenShop.png'
								className=' group-hover:-translate-y-[65%] duration-3000 '
							/>
							</div>
						}
						actions={[
							<div
								className='flex justify-center text-[16px]  w-full'
								key='link'
								onClick={()=>{ router.push('https://green-shop-mauve.vercel.app')}}
							>
								<Link2 />
							</div>,
							<div
								className='flex justify-center text-[16px]  w-full'
								key='github' onClick={()=>{ router.push('https://github.com/ObidjonFrontEnd/GreenShop')}}
							>
								<Github />
							</div>,
							<div
								className='flex justify-center text-[16px] w-full'
								key='ellipsis'
							>
								<Ellipsis />
							</div>,
						]}
					>
						<Meta
							
							title='Green Shop'
							description='A weather forecasting app using Next.js and OpenWeather API'
						/>
					</Card>

					<Card className=''
						style={{ width: '100%' }}
						cover={
							<div className='h-[170px] group overflow-hidden'>
								<img
								alt='example'
								src='DevConnector.PNG'
								className=' '
							/>

							</div>
								
							
						}
						actions={[
							<div
								className='flex justify-center text-[16px]  w-full'
								key='link'
								onClick={()=>{ router.push('https://react-api-demo-sigma.vercel.app/')}}
							>
								<Link2 />
							</div>,
							<div
								className='flex justify-center text-[16px]  w-full'
								key='github' onClick={()=>{ router.push('https://github.com/ObidjonFrontEnd/React-Api-Demo')}}
							>
								<Github />
							</div>,
							<div
								className='flex justify-center text-[16px] w-full'
								key='ellipsis'
							>
								<Ellipsis />
							</div>,
						]}
					>
						<Meta
							
							title='DevConnector'
							description='A weather forecasting app using Next.js and OpenWeather API'
						/>
					</Card>


					<Card className=''
						style={{ width: '100%' }}
						cover={
							<div className='h-[170px] group overflow-hidden'>
								<img
								alt='example'
								src='protfioloTailwind.PNG'
								className='group-hover:-translate-y-[85%] duration-3000 '
							/>

							</div>
								
							
						}
						actions={[
							<div
								className='flex justify-center text-[16px]  w-full'
								key='link'
								onClick={()=>{ router.push('https://obidjon.uz/')}}
							>
								<Link2 />
							</div>,
							<div
								className='flex justify-center text-[16px]  w-full'
								key='github' onClick={()=>{ router.push('https://github.com/ObidjonFrontEnd/portfol-origal')}}
							>
								<Github />
							</div>,
							<div
								className='flex justify-center text-[16px] w-full'
								key='ellipsis'
							>
								<Ellipsis />
							</div>,
						]}
					>
						<Meta
							
							title='Portfiolo Tailwind'
							description='A weather forecasting app using Next.js and OpenWeather API'
						/>
					</Card>


					
					<Card className=''
						style={{ width: '100%' }}
						cover={
							<div className='h-[170px] group overflow-hidden'>
								<img
								alt='example'
								src='protfioloTailwind.PNG'
								className='group-hover:-translate-y-[85%] duration-3000 '
							/>

							</div>
								
							
						}
						actions={[
							<div
								className='flex justify-center text-[16px]  w-full'
								key='link'
								onClick={()=>{ router.push('https://obidjon.uz/')}}
							>
								<Link2 />
							</div>,
							<div
								className='flex justify-center text-[16px]  w-full'
								key='github' onClick={()=>{ router.push('https://github.com/ObidjonFrontEnd/portfol-origal')}}
							>
								<Github />
							</div>,
							<div
								className='flex justify-center text-[16px] w-full'
								key='ellipsis'
							>
								<Ellipsis />
							</div>,
						]}
					>
						<Meta
							
							title='Portfiolo Tailwind'
							description='A weather forecasting app using Next.js and OpenWeather API'
						/>
					</Card>



					<Card className=''
						style={{ width: '100%' }}
						cover={
							<div className='h-[170px] group overflow-hidden'>
								<img
								alt='example'
								src='GreenShop.png'
								className=' group-hover:-translate-y-[65%] duration-3000 '
							/>
							</div>
						}
						actions={[
							<div
								className='flex justify-center text-[16px]  w-full'
								key='link'
								onClick={()=>{ router.push('https://green-shop-mauve.vercel.app')}}
							>
								<Link2 />
							</div>,
							<div
								className='flex justify-center text-[16px]  w-full'
								key='github' onClick={()=>{ router.push('https://github.com/ObidjonFrontEnd/GreenShop')}}
							>
								<Github />
							</div>,
							<div
								className='flex justify-center text-[16px] w-full'
								key='ellipsis'
							>
								<Ellipsis />
							</div>,
						]}
					>
						<Meta
							
							title='Green Shop'
							description='A weather forecasting app using Next.js and OpenWeather API'
						/>
					</Card>

					<Card className=''
						style={{ width: '100%' }}
						cover={
							<div className='h-[170px] group overflow-hidden'>
								<img
								alt='example'
								src='DevConnector.PNG'
								className=' '
							/>

							</div>
								
							
						}
						actions={[
							<div
								className='flex justify-center text-[16px]  w-full'
								key='link'
								onClick={()=>{ router.push('https://react-api-demo-sigma.vercel.app/')}}
							>
								<Link2 />
							</div>,
							<div
								className='flex justify-center text-[16px]  w-full'
								key='github' onClick={()=>{ router.push('https://github.com/ObidjonFrontEnd/React-Api-Demo')}}
							>
								<Github />
							</div>,
							<div
								className='flex justify-center text-[16px] w-full'
								key='ellipsis'
							>
								<Ellipsis />
							</div>,
						]}
					>
						<Meta
							
							title='DevConnector'
							description='A weather forecasting app using Next.js and OpenWeather API'
						/>
					</Card>


					<Card className=''
						style={{ width: '100%' }}
						cover={
							<div className='h-[170px] group overflow-hidden'>
								<img
								alt='example'
								src='protfioloTailwind.PNG'
								className='group-hover:-translate-y-[85%] duration-3000 '
							/>

							</div>
								
							
						}
						actions={[
							<div
								className='flex justify-center text-[16px]  w-full'
								key='link'
								onClick={()=>{ router.push('https://obidjon.uz/')}}
							>
								<Link2 />
							</div>,
							<div
								className='flex justify-center text-[16px]  w-full'
								key='github' onClick={()=>{ router.push('https://github.com/ObidjonFrontEnd/portfol-origal')}}
							>
								<Github />
							</div>,
							<div
								className='flex justify-center text-[16px] w-full'
								key='ellipsis'
							>
								<Ellipsis />
							</div>,
						]}
					>
						<Meta
							
							title='Portfiolo Tailwind'
							description='A weather forecasting app using Next.js and OpenWeather API'
						/>
					</Card>


					
					<Card className=''
						style={{ width: '100%' }}
						cover={
							<div className='h-[170px] group overflow-hidden'>
								<img
								alt='example'
								src='protfioloTailwind.PNG'
								className='group-hover:-translate-y-[85%] duration-3000 '
							/>

							</div>
								
							
						}
						actions={[
							<div
								className='flex justify-center text-[16px]  w-full'
								key='link'
								onClick={()=>{ router.push('https://obidjon.uz/')}}
							>
								<Link2 />
							</div>,
							<div
								className='flex justify-center text-[16px]  w-full'
								key='github' onClick={()=>{ router.push('https://github.com/ObidjonFrontEnd/portfol-origal')}}
							>
								<Github />
							</div>,
							<div
								className='flex justify-center text-[16px] w-full'
								key='ellipsis'
							>
								<Ellipsis />
							</div>,
						]}
					>
						<Meta
							
							title='Portfiolo Tailwind'
							description='A weather forecasting app using Next.js and OpenWeather API'
						/>
					</Card>

				</div>
			</div>
		</div>
	)
}

export default Projects
