import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';


const App = () => {
  return (
    <Fragment>
    
    <Header />
    <ItemListContainer greetings= 'Proximamente Shop' />
    
    </Fragment>
  );
}

export default App;
