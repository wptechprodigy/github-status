import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Operations from './components/operations';

function App() {
	return (
		<div className='flex flex-col min-h-screen bg-green-100'>
      <Header />
			<Operations />
      <Footer />
		</div>
	);
}

export default App;
