import React, { useState, useEffect } from 'react';
import requestPromise from 'request-promise';
import Operation from './Operation';

function Operations() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const requestServiceStatus = async () => {
			setIsLoading(true);
			setIsError(false);

			const options = {
				uri: 'https://www.githubstatus.com/',
				json: true,
			};

			try {
				const response = await requestPromise(options);

				setData(response.components);
			} catch (error) {
				setIsError(true);
			}

			setIsLoading(false);
		};

		requestServiceStatus();
	}, []);

	return (
		<div className='flex flex-col m-8 md:flex flex-grow'>
			{isError && (
				<h1 className='text-center font-black text-3xl'>
					Something went wrong{' '}
					<span role='img' aria-label='Error occurred'>
						😪
					</span>
				</h1>
			)}

			{isLoading ? (
				<h1 className='text-center font-black text-3xl'>Loading...</h1>
			) : (
				data.map(({ id, ...restData }) => (
					<Operation key={id} restData={restData} />
				))
			)}
		</div>
	);
}

export default Operations;
