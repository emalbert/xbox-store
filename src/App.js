import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer />

    </>
  );
}

export default App;
