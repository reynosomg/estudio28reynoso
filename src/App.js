import NavBar from './components/NavBar';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';



const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting="Hola Mundo desde ItemList Container !!!"/>
      </header>
    </div>
  );
}

export default App;
