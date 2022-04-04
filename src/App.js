import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <ItemListContainer greeting="Nuevo Producto" />
    </>
  );
}

export default App;
