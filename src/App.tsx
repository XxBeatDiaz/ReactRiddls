import Header from './comps/Header';
import Router from './routes/Router';
import { userTypeContext } from './contexts/userContext';
import Contexts from './contexts/contexts';
import './App.css';

function App() {
  let currentUser = Contexts().userTypeContext;
  currentUser = "Guest";

  return (
    <userTypeContext.Provider value={currentUser}>
      <div className='app'>
        <Header></Header>
        <Router></Router>
      </div>
    </userTypeContext.Provider>
    )
}

export default App
