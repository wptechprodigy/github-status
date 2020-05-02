import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

function App() {
	return (
		<div className='flex flex-col min-h-screen'>
      <Header />
			<h1 className='font-bold text-purple-700 flex-grow'>Hello world!</h1>
      <Footer />
		</div>
	);
}

export default App;
