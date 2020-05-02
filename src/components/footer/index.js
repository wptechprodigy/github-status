import React from 'react';

function Footer() {
	return (
		<div className='items-center justify-center bg-green-400 p-10 font-semibold text-center text-gray-800 underline'>
			<p>
				@2020{' '}
				<span className='block'>
					<a
						href='https://github.com/wptechprodigy/github-status'
						alt='Code base'
						target='_blank'
						rel='noopener noreferrer'>
						https://github.com/wptechprodigy/github-status
					</a>
				</span>
			</p>
			<p>
				As part of #7Days7Websites Challenge
				<span className='block'>By: Waheed Afolabi</span>
			</p>
		</div>
	);
}

export default Footer;
