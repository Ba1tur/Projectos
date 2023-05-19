import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Questions from '../ Questions/ Questions';

const Layouts = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
			

		</>
	);
};

export default Layouts;