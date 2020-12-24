import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/style.scss';
import './App.css';
import AppWrapper from './AppWrapper';

function App() {
	return (
		<Provider store={store}>
			<AppWrapper/>
		</Provider>
	);
}

export default App;
