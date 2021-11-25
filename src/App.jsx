import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import ItemDetailsContainer from './components/ItemListContainer/ItemDetailsContainer/ItemDetailsContainer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';



const App = () => {
  return (
    <BrowserRouter>
    
    <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings= 'Bienvenidos a Vinyl Shop' />} />

        <Route path="/genero/:generoId" element={<ItemListContainer greetings= 'Bienvenidos a Vinyl Shop' />} />
        <Route path="/item/:id" element={<ItemDetailsContainer  />} />
        <Route path="/contador" element={<ItemCount stock="10" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
