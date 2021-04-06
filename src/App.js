import './App.css';
import Navbar from './navbar';
import Content from './content';
import { useMediaQuery } from 'react-responsive';
function App() {
  return (
    <div>
      <Navbar/>  
      <Content/>    
    </div>
  );
}

export default App;
