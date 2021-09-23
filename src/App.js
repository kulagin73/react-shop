import React  from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import {Header} from './components/header';
import {Footer} from './components/footer';
import { Main } from './components/main';
import { ContextProvider } from './context';

const App = () => {

	return (
	  <>
	  <Header />
	  <ContextProvider>
	  	<Main />
	  </ContextProvider>
	  <Footer />
	  </>
	)
}
 export default App;
