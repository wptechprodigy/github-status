import React from 'react';
import Logo from './Logo';

function Header() {
	return (
		<div className='grid grid-rows-1 bg-green-400'>
			<div className='flex items-center'>
				<Logo />
				<span className='mt-4 mb-4 ml-2 font-bold uppercase text-2xl text-gray-800'>
					Github Status
				</span>
			</div>
		</div>
	);
}

export default Header;
