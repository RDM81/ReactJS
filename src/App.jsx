import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';


import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';



const App = () => {
  return (
    <Fragment>
    
    <Header />
    <ItemListContainer greetings= 'Bienvenidos a Vinyl Shop' />
    <ItemCount stock="10" />
    
    
    </Fragment>
  );
}

export default App;
