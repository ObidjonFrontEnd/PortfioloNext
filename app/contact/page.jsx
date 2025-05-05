import React from 'react'
import NavBar from '../components/header/navbar'

const Contact = () => {
	return (
		<div className='w-full h-[100vh] bg-[rgb(255,133,86)] px-[10px] py-[10px] md:px-[20px] md:py-[25px]'>
			<div className='fixed bottom-[115px] w-full z-50'>
				<NavBar />
			</div>
			<div className="w-full h-full px-[20px] bg-[#01192f] py-[50px] text-center md:text-start md:flex md:items-center md:justify-center rounded-[35px] md:rounded-[50px] gap-[30px]">
				<div className="text-[50px] text-white uppercase font-extrabold">
					<h2 className=''>Let's make</h2>
					<h2 className=''>something</h2>
					<h2 className=''>amazing!</h2>
				</div>
				<div className="">
				
					<form action="" className='md:w-[500px] shadow-2xl h-full px-[15px] bg-gray-500/30  py-[30px] rounded-[60px]'>
							<input type="text" className='border-white px-[23px] bg-white/15 text-white outline-none border-[1px] font-bold rounded-[30px] w-full h-[50px] mb-[20px]' placeholder='Name' />

							<input type="email" className='border-white px-[23px] bg-white/15 text-white outline-none border-[1px] font-bold rounded-[30px] w-full h-[50px] mb-[20px]' placeholder='Email' />


							<textarea type="text" rows={6} className='border-white h-full px-[23px] bg-white/15 py-[15px] text-white font-bold outline-none border-[1px] rounded-[30px] w-full resize-none' placeholder='Message' />

							<div className="text-center mt-[20px]">
								<button className='w-[70%] py-[15px] bg-[white]/15 mx-auto text-white font-bold rounded-[30px] border-white border-[1px] '>Submit</button>
							</div>
					</form>
				</div>

			</div>

		</div>
	)
}

export default Contact