import './App.css';
import Mainpage from './pages/Mainpage';
import { Apikey } from './components/Api';

function App() {
  return (
    <>
    <Mainpage {...Apikey} />
    </>
    );
}

export default App;
