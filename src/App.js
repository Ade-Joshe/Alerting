import React from 'react';
import './App.css';
import { ThemeContextProvider } from './theme/themeContextProvider';
import Nav from './pages/layout';
import Alert from './component/Alert';

function App() {
	return (
		<ThemeContextProvider >
			<Alert />
		</ThemeContextProvider>
	);
}


export default App;