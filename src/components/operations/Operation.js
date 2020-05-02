import React from 'react';

function Operation({ restData: { name, status, description } }) {
	return (
		<div className='flex justify-between md:flex md:justify-between bg-white rounded-lg p-6 mx-auto mb-2 shadow w-5/6'>
			<div className='w-3/4 font-bold text-xl text-gray-700'>
				{name}
				<span className='block text-gray-700 font-medium text-sm'>
					{description}
				</span>
			</div>
			{status === 'operational' ? (
				<div className='w-1/4 bg-green-600 rounded-full text-white text-center my-auto pt-1 pb-2 font-light border-solid border-4'>
					{status}
				</div>
			) : (
				<div className='w-1/4 bg-red-600 rounded-full text-white text-center my-auto pt-1 pb-2 font-light border-solid border-4'>
					{status}
				</div>
			)}
		</div>
	);
}

export default Operation;
